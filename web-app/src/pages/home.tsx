import { Box, Grid } from '@mui/material';
import toast from 'react-hot-toast';

import { BlogCard, EmptyData } from '@/components';
import { SectionTag } from '@/components';
import {
  EnumCategory,
  useGetBlogsQuery,
  useGetPopularBlogsQuery,
  useLikeBlogMutation,
} from '@/features/blog';
import { formatDateToString } from '@/utils';

const Home = () => {
  const { data: popularBlogs, refetch: refetchPopularBlogs } =
    useGetPopularBlogsQuery({});
  const { data: blogsComputer, refetch: refetchComputerBlogs } =
    useGetBlogsQuery({
      category: EnumCategory['COMPUTER'],
    });
  const { data: blogsSocial, refetch: refetchSocialBlogs } = useGetBlogsQuery({
    category: EnumCategory['SOCIAL'],
  });

  const [likeBlog] = useLikeBlogMutation();

  const handleLikeBlog = (id: string) => {
    void likeBlog({
      variables: { id },
      onCompleted: () => {
        void refetchPopularBlogs();
        void refetchComputerBlogs();
        void refetchSocialBlogs();
      },
      onError: () => {
        toast.error('Something went wrong!');
      },
    });
  };

  return (
    <Box>
      <Box className="mb-20">
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <SectionTag sectionTagName="popular blogs" />
        </Grid>
        <Grid container spacing={2}>
          {!popularBlogs ||
            (popularBlogs.getPopularBlogs.length === 0 && (
              <Grid item xs={12}>
                <EmptyData />
              </Grid>
            ))}
          <Grid item xs={12} sm={12} md={12} lg={6}>
            {popularBlogs && popularBlogs.getPopularBlogs.length >= 1 && (
              <BlogCard
                id={popularBlogs.getPopularBlogs[0].id}
                position="above"
                title={popularBlogs.getPopularBlogs[0].title}
                time={formatDateToString(
                  popularBlogs.getPopularBlogs[0].createdAt,
                )}
                thumbnail={popularBlogs.getPopularBlogs[0].thumbnail}
                shortDesc={popularBlogs.getPopularBlogs[0].shortDesc}
                like={popularBlogs.getPopularBlogs[0].like}
                quantityLike={popularBlogs.getPopularBlogs[0].like.length}
                isLiked={popularBlogs.getPopularBlogs[0].isLiked}
                onLike={() =>
                  handleLikeBlog(popularBlogs.getPopularBlogs[0].id)
                }
              />
            )}
          </Grid>
          <Grid container spacing={2} item xs={12} md={12} lg={6}>
            {popularBlogs?.getPopularBlogs.slice(1, 4).map((blog) => (
              <Grid item xs={6} md={6} lg={6} key={blog.id}>
                <BlogCard
                  id={blog.id}
                  position="above"
                  title={blog.title}
                  time={formatDateToString(blog.createdAt)}
                  thumbnail={blog.thumbnail}
                  shortDesc={blog.shortDesc}
                  quantityLike={blog.like.length}
                  like={blog.like}
                  isLiked={blog.isLiked}
                  onLike={() => handleLikeBlog(blog.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <Grid item lg={12}>
            <SectionTag sectionTagName="computer" />
          </Grid>
          <Grid container gap={2}>
            {!blogsComputer ||
              (blogsComputer.getBlogs.data.length === 0 && (
                <Grid item xs={12}>
                  <EmptyData />
                </Grid>
              ))}
            {blogsComputer?.getBlogs.data.slice(0, 5).map((blog) => (
              <Grid item xs={12} md={12} lg={12} key={blog.id}>
                <BlogCard
                  id={blog.id}
                  position="horizontal"
                  title={blog.title}
                  time={formatDateToString(blog.createdAt)}
                  thumbnail={blog.thumbnail}
                  shortDesc={blog.shortDesc}
                  quantityLike={blog.like.length}
                  like={blog.like}
                  isLiked={blog.isLiked}
                  onLike={() => handleLikeBlog(blog.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item sm={12} md={6}>
          <Grid item lg={12}>
            <SectionTag sectionTagName="Social" />
          </Grid>
          <Grid container gap={2}>
            {!blogsSocial ||
              (blogsSocial.getBlogs.data.length === 0 && (
                <Grid item xs={12}>
                  <EmptyData />
                </Grid>
              ))}
            {blogsSocial?.getBlogs.data.slice(0, 5).map((blog) => (
              <Grid item xs={12} md={12} lg={12} key={blog.id}>
                <BlogCard
                  id={blog.id}
                  position="horizontal"
                  title={blog.title}
                  time={formatDateToString(blog.createdAt)}
                  thumbnail={blog.thumbnail}
                  shortDesc={blog.shortDesc}
                  like={blog.like}
                  quantityLike={blog.like.length}
                  isLiked={blog.isLiked}
                  onLike={() => handleLikeBlog(blog.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
