import { FC, useState } from 'react';

import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  IconButtonProps,
  TextField,
  Tooltip,
  Typography,
  styled,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

import {
  BlogCard,
  CommonButton,
  ConfirmButton,
  EmptyData,
  SectionTag,
} from '@/components';
import { LOGIN_PATH } from '@/data';
import { useAuthStore } from '@/features/auth';
import {
  useCreateCommentMutation,
  useGetBlogDetailQuery,
  useGetCommentsQuery,
  useGetPopularBlogsQuery,
  useLikeBlogMutation,
} from '@/features/blog';
import { formatDateToString, validator } from '@/utils';

type ExpandMoreProps = IconButtonProps & {
  expand: boolean;
};

type InputComment = {
  content: string;
};

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BlogDetail: FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputComment>();
  const { id } = useParams();
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded((prevState) => !prevState);
  };

  const { data, refetch: refectBlog } = useGetBlogDetailQuery(id!);
  const { data: comments, refetch } = useGetCommentsQuery(id!);
  const { data: popularBlogs } = useGetPopularBlogsQuery({});

  const [createComment] = useCreateCommentMutation();
  const [likeBlog] = useLikeBlogMutation();

  const onSubmit = (values: InputComment) => {
    void createComment({
      variables: { body: { ...values, blog: id! } },
      onCompleted: () => {
        void refetch();
        void reset({ content: '' });
      },
      onError: (error) => {
        void toast.error(error.message);
      },
    });
  };

  const handleLike = (id: string) => {
    void likeBlog({
      variables: { id },
      onCompleted: () => {
        void refectBlog();
      },
      onError: () => {
        toast.error('Something went wrong!');
      },
    });
  };

  return (
    <Grid container spacing={3} className="pt-5">
      <Grid item xs={12} md={9} lg={9} className="!pt-0">
        <Card>
          <Typography variant="h4" className="pt-5 pl-2 pb-5">
            {data?.getBlogById.title}
          </Typography>
          <CardHeader
            avatar={
              <Avatar
                src={data?.getBlogById.creator.avatar}
                aria-label="recipe"
              />
            }
            title={
              <Typography>{data?.getBlogById.creator.fullname}</Typography>
            }
            subheader={data && formatDateToString(data.getBlogById.createdAt)}
          />
          <CardMedia
            component="img"
            className="!w-2/3 mx-auto mb-10"
            image={data?.getBlogById.thumbnail}
            alt={data?.getBlogById.title}
          />
          <CardContent>
            <div
              dangerouslySetInnerHTML={
                data && { __html: data?.getBlogById.content }
              }
            ></div>
          </CardContent>
          <CardActions disableSpacing>
            <Badge badgeContent={data?.getBlogById.like.length} color="primary">
              <IconButton
                aria-label="favorites"
                onClick={() => handleLike(id!)}
              >
                <ThumbUpIcon
                  color={
                    data?.getBlogById.isLiked &&
                    token &&
                    data.getBlogById.like.includes(user?.id as string)
                      ? 'info'
                      : 'action'
                  }
                />
              </IconButton>
            </Badge>

            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="comment"
            >
              <Badge
                badgeContent={comments?.getComments.length}
                color="primary"
              >
                <Tooltip title="Comment">
                  <CommentIcon color="action" />
                </Tooltip>
              </Badge>
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit className="pb-2">
            {token ? (
              <Box
                component="form"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                className="px-2 gap-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Controller
                  control={control}
                  rules={validator('required')}
                  name="content"
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <TextField
                        {...field}
                        error={errors.content ? true : false}
                        id="outlined-basic"
                        label="Comment"
                        variant="outlined"
                        size="small"
                      />
                      {errors.content && (
                        <FormHelperText error>
                          {errors.content.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  )}
                />
                <ConfirmButton color="error" variant="contained" size="small">
                  Send
                </ConfirmButton>
              </Box>
            ) : (
              <Box display="flex" justifyContent="center">
                <CommonButton
                  variant="outlined"
                  actionBtn="redirect"
                  href={LOGIN_PATH}
                >
                  Login to comment
                </CommonButton>
              </Box>
            )}
            {comments?.getComments.map((cmt) => (
              <Card key={cmt.id}>
                <CardHeader
                  avatar={
                    <Avatar src={cmt.creator.avatar} aria-label="recipe" />
                  }
                  title={cmt.creator.fullname}
                  subheader={
                    cmt &&
                    formatDateToString(cmt.createdAt, 'HH:mm:ss DD/MM/YYYY')
                  }
                  className="!pb-2"
                />
                <CardContent className="!pt-0">{cmt.content}</CardContent>
              </Card>
            ))}
          </Collapse>
        </Card>
      </Grid>
      <Grid
        item
        xs={0}
        md={3}
        lg={3}
        className="bg-white dark:bg-[#1E1E1E] hidden md:block mt-10"
      >
        <SectionTag sectionTagName="popular blog" />
        <Box display="flex" alignItems="center" className="flex-col gap-3">
          {!popularBlogs ||
            (popularBlogs.getPopularBlogs.length === 0 && <EmptyData />)}
          {popularBlogs?.getPopularBlogs.map((blog) => (
            <BlogCard
              id={blog.id}
              key={blog.id}
              position="above"
              title={blog.title}
              thumbnail={blog.thumbnail}
              shortDesc={blog.shortDesc}
              time={formatDateToString(blog.createdAt)}
              isLiked={blog.isLiked}
              onLike={() => handleLike(blog.id)}
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default BlogDetail;
