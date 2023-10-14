import React, { FC } from 'react';

import { CircularProgress, InputLabel, MenuItem, Select } from '@mui/material';
import { ControllerRenderProps } from 'react-hook-form';

import { useQueryCategories } from '@/hooks';

type Props = ControllerRenderProps & {
  error: boolean;
};

const CategoryFormItem: FC<Props> = ({ error = false, ...props }) => {
  const { data, loading } = useQueryCategories();

  return (
    <React.Fragment>
      <InputLabel id="select-label">Select category</InputLabel>
      <Select
        {...props}
        labelId="select-label"
        label="Select category"
        name="category"
        error={error}
      >
        {loading && <CircularProgress size={20} />}
        {data?.getCategories
          .filter((item) => item.name !== 'Home')
          .map((cate) => (
            <MenuItem key={cate.id} value={cate.id}>
              {cate.name}
            </MenuItem>
          ))}
      </Select>
    </React.Fragment>
  );
};

export default CategoryFormItem;
