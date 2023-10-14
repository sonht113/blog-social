import { Grid } from '@mui/material';

import { BlogCard } from '@/components';

const Home = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={3}>
          <BlogCard
            position="above"
            title="test"
            time="test"
            thumbnail="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            shortDesc="kim cuong is a handsome boy, he is a student at donga useniversity, you can bla bla bla bla bla bla bla bla bla bl bla bl abl a "
            quantityLike={10}
          />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <BlogCard
            position="above"
            title="test"
            time="test"
            thumbnail="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            shortDesc="test"
          />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <BlogCard
            position="above"
            title="test"
            time="test"
            thumbnail="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            shortDesc="test"
          />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <BlogCard
            position="above"
            title="test"
            time="test"
            thumbnail="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            shortDesc="test"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
