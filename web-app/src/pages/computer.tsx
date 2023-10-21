import { Grid } from '@mui/material';

import { BlogCard, CategoriesNav, SectionTag } from '@/components';
import {
  EnumCategory,
  useGetBlogsQuery,
  useGetPopularBlogsQuery,
} from '@/features/blog';
import { formatDateToString } from '@/utils';

const Computer = () => {
  const { data: popularBlogs } = useGetPopularBlogsQuery({
    category: EnumCategory['COMPUTER'],
  });

  const { data: blogs } = useGetBlogsQuery({
    category: EnumCategory['COMPUTER'],
  });

  return (
    <Grid container spacing={2} className="!mt-4">
      <Grid
        item
        xs={0}
        sm={0}
        md={0}
        lg={2}
        className="bg-black hidden lg:block p-4"
      >
        <CategoriesNav />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={10} className="pt-5 lg:!pt-0">
        <Grid item container className="bg-slate-50 p-4 ">
          <SectionTag sectionTagName="popular blog" />
          <Grid item container lg={12} spacing={2}>
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
                  isLiked={true}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item container className="bg-slate-50 !mt-5 p-4">
          <SectionTag sectionTagName="All blog" />
          <Grid item container lg={12} spacing={2}>
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
                  isLiked={true}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Computer;
