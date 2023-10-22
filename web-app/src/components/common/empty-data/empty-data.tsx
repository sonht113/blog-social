import { FC } from 'react';

import { Box, Typography } from '@mui/material';
import { AiOutlineInbox } from 'react-icons/ai';

const EmptyData: FC = () => {
  return (
    <Box display="flex" alignItems="center" className="flex-col">
      <AiOutlineInbox size={50} />
      <Typography>No data</Typography>
    </Box>
  );
};

export default EmptyData;
