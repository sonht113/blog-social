import { Grid } from '@mui/material';

import { BlogCard } from '@/components';

const Home = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <BlogCard
            position="vertical"
            title="test"
            time="test"
            image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            content="test"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <BlogCard
            position="vertical"
            title="test"
            time="test"
            image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            content="test"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <BlogCard
            position="vertical"
            title="test"
            time="test"
            image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            content="test"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <BlogCard
            position="vertical"
            title="test"
            time="test"
            image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            content="test"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
