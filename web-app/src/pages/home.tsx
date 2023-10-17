import { Box, Grid } from '@mui/material';

import { BlogCard } from '@/components';
import { SectionTag } from '@/components';
import {
  EnumCategory,
  useGetBlogsQuery,
  useGetPopularBlogsQuery,
} from '@/features/blog';
import { formatDateToString } from '@/utils';

const Home = () => {
  const { data: popularBlogs } = useGetPopularBlogsQuery({});
  const { data: blogsComputer } = useGetBlogsQuery({
    category: EnumCategory['COMPUTER'],
  });
  const { data: blogsSocial } = useGetBlogsQuery({
    category: EnumCategory['SOCIAL'],
  });

  return (
    <Box>
      <Box className="mb-20">
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <SectionTag sectionTagName="popular blogs" />
        </Grid>
        <Grid container spacing={2}>
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
                quantityLike={popularBlogs.getPopularBlogs[0].like.length}
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
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <Grid item lg={12}>
            <SectionTag sectionTagName="computer" />
          </Grid>
          <Grid container gap={2}>
            {blogsComputer?.getBlogs.data.slice(0, 5).map((blog) => (
              <Grid item xs={12} md={12} lg={12} key={blog.id}>
                <BlogCard
                  position="horizontal"
                  title={blog.title}
                  time={formatDateToString(blog.createdAt)}
                  thumbnail={blog.thumbnail}
                  shortDesc={blog.shortDesc}
                  quantityLike={blog.like.length}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <Grid item lg={12}>
            <SectionTag sectionTagName="Social" />
          </Grid>
          <Grid container gap={2}>
            {blogsSocial?.getBlogs.data.slice(0, 5).map((blog) => (
              <Grid item xs={12} md={12} lg={12} key={blog.id}>
                <BlogCard
                  position="horizontal"
                  title={blog.title}
                  time={formatDateToString(blog.createdAt)}
                  thumbnail={blog.thumbnail}
                  shortDesc={blog.shortDesc}
                  quantityLike={blog.like.length}
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
