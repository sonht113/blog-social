import { Grid } from '@mui/material';
import toast from 'react-hot-toast';

import { BlogCard, CategoriesNav, EmptyData, SectionTag } from '@/components';
import {
  EnumCategory,
  useGetBlogsQuery,
  useGetPopularBlogsQuery,
  useLikeBlogMutation,
} from '@/features/blog';
import { formatDateToString } from '@/utils';

const Software = () => {
  const { data: popularBlogs, refetch: refetchPopular } =
    useGetPopularBlogsQuery({
      category: EnumCategory['SOFTWARE'],
    });

  const { data: blogs, refetch: refetchBlogs } = useGetBlogsQuery({
    category: EnumCategory['SOFTWARE'],
  });

  const [likeBlog] = useLikeBlogMutation();

  const handleLikeBlog = (id: string) => {
    void likeBlog({
      variables: { id },
      onCompleted: () => {
        void refetchPopular();
        void refetchBlogs();
      },
      onError: () => {
        toast.error('Something went wrong!');
      },
    });
  };

  return (
    <Grid container spacing={2} className="!mt-4">
      <Grid
        item
        xs={0}
        sm={0}
        md={0}
        lg={2}
        className="bg-slate-400 dark:bg-[#1E1E1E] hidden lg:block p-4"
      >
        <CategoriesNav />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={10} className="pt-5 lg:!pt-0">
        <Grid item container className="bg-slate-200 dark:bg-[#1E1E1E] p-4 ">
          <SectionTag sectionTagName="popular blog" />
          <Grid item container lg={12} spacing={2}>
            {!popularBlogs ||
              (popularBlogs.getPopularBlogs.length === 0 && (
                <Grid item xs={12}>
                  <EmptyData />
                </Grid>
              ))}
            {popularBlogs?.getPopularBlogs.slice(0, 5).map((blog) => (
              <Grid item xs={12} lg={4} key={blog.id}>
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
        <Grid
          item
          container
          className="bg-slate-200 dark:bg-[#1E1E1E] !mt-5 p-4"
        >
          <SectionTag sectionTagName="All blog" />
          <Grid item container lg={12} spacing={2}>
            {!blogs ||
              (blogs.getBlogs.data.length === 0 && (
                <Grid item xs={12}>
                  <EmptyData />
                </Grid>
              ))}
            {blogs?.getBlogs.data.map((blog) => (
              <Grid item xs={12} lg={4} key={blog.id}>
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
      </Grid>
    </Grid>
  );
};

export default Software;
