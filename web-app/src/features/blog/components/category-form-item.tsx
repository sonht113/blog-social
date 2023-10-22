import React, { FC } from 'react';

import { InputLabel, MenuItem, Select } from '@mui/material';
import { ControllerRenderProps } from 'react-hook-form';

import { CATEGORY_OPTION } from '../constant';

type Props = ControllerRenderProps & {
  error: boolean;
};

const CategoryFormItem: FC<Props> = ({ error = false, ...props }) => {
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
        {CATEGORY_OPTION.map((cate) => (
          <MenuItem key={cate.label} value={cate.value}>
            {cate.label}
          </MenuItem>
        ))}
      </Select>
    </React.Fragment>
  );
};

export default CategoryFormItem;
