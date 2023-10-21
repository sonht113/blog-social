import { useState } from 'react';

import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Box, Grid, Typography } from '@mui/material';

import { CategoriesNav, SectionTag } from '@/components';
import { EnumCategory, useGetBlogsQuery } from '@/features/blog';

const computerDesc =
  'Explore the Computer Universe at ByteBoosts! Dive into our comprehensive range of tech insights, reviews, and guides, all centered around the heart of computing. From powerful Desktop systems to sleek Laptops, crystal-clear Monitors, and on-the-go Portable PCs, we’re your go-to source for everything tech. Uncover the latest trends, expert advice, and in-depth analyses to enhance your computing journey.';

const Software = () => {
  const { data: blogsSoftware } = useGetBlogsQuery({
    category: EnumCategory['SOFTWARE'],
  });

  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((prevState) => !prevState);
  };
  return (
    <Box className="mt-4">
      <Grid container spacing={2}>
        <Grid
          item
          xs={0}
          sm={0}
          md={0}
          lg={2}
          className="bg-black px-4 !mt-4 h-screen hidden py-4 lg:block"
        >
          <CategoriesNav />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={10} className="p-4">
          <Grid item lg={12} className="bg-slate-50 p-4">
            <SectionTag sectionTagName="computer" />
            <Typography className="text-black text-justify">
              {computerDesc}
            </Typography>
          </Grid>
          <Grid item lg={12} className="!mt-4">
            {blogsSoftware?.getBlogs.data.map((el) => (
              <Grid
                item
                lg={12}
                key={el.id}
                className="bg-slate-50 text-black p-4"
              >
                <Typography className="!text-3xl ">{el.shortDesc}</Typography>
                <Typography className="!text-xs text-gray-500 !mb-4">
                  {el.createdAt}
                </Typography>
                <img
                  src={el.thumbnail}
                  alt=""
                  className="w-full !mb-4 object-cover"
                />
                <Typography className="!text-2xl !mb-4">
                  {el.shortDesc}
                </Typography>
                <Box className="flex justify-between items-center ">
                  <Box className="flex justify-between items-center gap-2 cursor-pointer">
                    {liked ? (
                      <ThumbUpIcon onClick={handleLike} />
                    ) : (
                      <ThumbUpOffAltIcon onClick={handleLike} />
                    )}
                    <Typography>0</Typography>
                  </Box>
                  <Box className="flex justify-between items-center gap-2 cursor-pointer">
                    <FolderCopyIcon />
                    <Typography>0</Typography>
                  </Box>
                  <ShareIcon className="cursor-pointer" />
                </Box>
              </Grid>
            ))}
            <Typography></Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Software;
