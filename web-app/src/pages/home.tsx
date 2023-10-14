import { FC } from 'react';

import { Box, Grid, Typography } from '@mui/material';

import { BlogCard } from '@/components';

type Props = {
  text: string;
};

const Home = () => {
  const data = [
    {
      position: 'above',
      title: 'test',
      time: 'test',
      thumbnail:
        'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
      shortDesc:
        'kim cuong is a handsome boy, he is a student at donga useniversity, you can bla bla bla bla bla bla bla bla bla bl bla bl abl a ',
      quantityLike: 10,
    },
    {
      position: 'above',
      title: 'test',
      time: 'test',
      thumbnail:
        'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
      shortDesc:
        'kim cuong is a handsome boy, he is a student at donga useniversity, you can bla bla bla bla bla bla bla bla bla bl bla bl abl a ',
      quantityLike: 10,
    },
    {
      position: 'above',
      title: 'test',
      time: 'test',
      thumbnail:
        'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
      shortDesc:
        'kim cuong is a handsome boy, he is a student at donga useniversity, you can bla bla bla bla bla bla bla bla bla bl bla bl abl a ',
      quantityLike: 10,
    },
    {
      position: 'above',
      title: 'test',
      time: 'test',
      thumbnail:
        'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
      shortDesc:
        'kim cuong is a handsome boy, he is a student at donga useniversity, you can bla bla bla bla bla bla bla bla bla bl bla bl abl a ',
      quantityLike: 10,
    },
  ];
  const TypePostTag: FC<Props> = ({ text }) => {
    return (
      <Box className="my-5 w-full">
        <Typography className="bg-red-600 inline py-2 px-3 uppercase">
          {text}
        </Typography>
        <hr className="border-y-red-600 border-1 solid mt-1" />
      </Box>
    );
  };
  return (
    <Box>
      <Box className="mb-20">
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <TypePostTag text="POPULAR POSTS" />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <BlogCard
              position="above"
              title="test"
              time="test"
              thumbnail="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
              shortDesc="kim cuong is a handsome boy, he is a student at donga useniversity, you can bla bla bla bla bla bla bla bla bla bl bla bl abl a "
              quantityLike={10}
            />
          </Grid>
          <Grid container spacing={2} item xs={12} sm={12} md={12} lg={6}>
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
            <TypePostTag text="computer" />
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
            <TypePostTag text="product" />
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
