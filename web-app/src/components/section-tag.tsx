import React, { FC } from 'react';

import { Box, Typography } from '@mui/material';

type Props = {
  sectionTagName: string;
};

export const SectionTag: FC<Props> = ({ sectionTagName }) => {
  return (
    <Box className="w-full my-5 ">
      <Typography className="bg-red-600 inline py-2 px-3 uppercase">
        {sectionTagName}
      </Typography>
      <hr className="border-y-red-600 border-1 solid mt-1" />
    </Box>
  );
};
