import React, { FC } from 'react';

import { Box, Typography } from '@mui/material';
type Props = {
  text: string;
};

const BlogTag: FC<Props> = ({ text }) => {
  return (
    <Box className="my-5 w-full">
      <Typography className="bg-red-600 inline py-2 px-3 uppercase">
        {text}
      </Typography>
      <hr className="border-y-red-600 border-1 solid mt-1" />
    </Box>
  );
};

export default BlogTag;
