import { Box, Grid } from '@mui/material';

import { BlogCard } from '@/components';
import { SectionTag } from '@/components';

const THUMBNAIL_URL =
  'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg';

const shortDescSample =
  'shortDekim cuong is a handsome boy, he is a student at donga useniversity, you can bla bla bla bla bla bla bla bla bla bl bla bl abl a scSample';

const data = [
  {
    position: 'above',
    title: 'test',
    time: 'test',
    thumbnail: THUMBNAIL_URL,
    shortDesc: shortDescSample,
    quantityLike: 10,
  },
  {
    position: 'above',
    title: 'test',
    time: 'test',
    thumbnail: THUMBNAIL_URL,
    shortDesc: shortDescSample,
    quantityLike: 10,
  },
  {
    position: 'above',
    title: 'test',
    time: 'test',
    thumbnail: THUMBNAIL_URL,
    shortDesc: shortDescSample,
    quantityLike: 10,
  },
  {
    position: 'above',
    title: 'test',
    time: 'test',
    thumbnail: THUMBNAIL_URL,
    shortDesc: shortDescSample,
    quantityLike: 10,
  },
];

const Home = () => {
  return (
    <Box>
      <Box className="mb-20">
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <SectionTag sectionTagName="popular posts" />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <BlogCard
              position="above"
              title="test"
              time="test"
              thumbnail={THUMBNAIL_URL}
              shortDesc={shortDescSample}
              quantityLike={10}
            />
          </Grid>
          <Grid container spacing={2} item xs={12} md={12} lg={6}>
            {data.map((el) => (
              <Grid item xs={6} md={6} lg={6} key={el.title}>
                <BlogCard
                  position="above"
                  title={el.title}
                  time={el.time}
                  thumbnail={el.thumbnail}
                  shortDesc={el.shortDesc}
                  quantityLike={el.quantityLike}
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
            {data.map((el) => (
              <Grid item xs={12} md={12} lg={12} key={el.title}>
                <BlogCard
                  position="horizontal"
                  title={el.title}
                  time={el.time}
                  thumbnail={el.thumbnail}
                  shortDesc={el.shortDesc}
                  quantityLike={el.quantityLike}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <Grid item lg={12}>
            <SectionTag sectionTagName="product" />
          </Grid>
          <Grid container gap={2}>
            {data.map((el) => (
              <Grid item xs={12} md={12} lg={12} key={el.title}>
                <BlogCard
                  position="horizontal"
                  title={el.title}
                  time={el.time}
                  thumbnail={el.thumbnail}
                  shortDesc={el.shortDesc}
                  quantityLike={el.quantityLike}
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
