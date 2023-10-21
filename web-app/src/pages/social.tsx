import { Box, Grid } from '@mui/material';

import { BlogCard } from '@/components';
import { SectionTag } from '@/components';
import { CategoriesNav } from '@/components';
import { EnumCategory, useGetPopularBlogsQuery } from '@/features/blog';
import { formatDateToString } from '@/utils';

const Social = () => {
  const { data: popularBlogs } = useGetPopularBlogsQuery({
    category: EnumCategory['SOCIAL'],
  });

  return (
    <Box className="mx-auto">
      <Grid container spacing={2} className="!mt-4">
        <Grid
          item
          xs={0}
          sm={0}
          md={0}
          lg={2}
          className="bg-black hidden h-screen lg:block p-4"
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
            <SectionTag sectionTagName="Dev Media" />
            <Grid className="text-justify text-black">
              Welcome to the ‘Dev Media’ Hub at ByteBoosts! Embark on a journey
              through the interconnected world of virtual communities and
              digital engagement. Our ‘Social Media’ category is your gateway to
              mastering the art of online presence. Explore a range of articles,
              tips, and guides that demystify the ever-evolving landscape of
              platforms like Facebook, Twitter, Instagram, and more. From
              crafting compelling content to decoding algorithms and fostering
              meaningful connections, we’re here to empower your social media
              prowess. Join us as we navigate the dynamic realm of digital
              communication, helping you unlock the potential of each platform
              to the fullest.
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Social;
