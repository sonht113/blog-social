import { FC, useMemo } from 'react';

import {
  Box,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';
import { Control, FieldErrors, FieldValues } from 'react-hook-form';

import CategoryFormItem from './category-form-item';
import { InputBlog } from '../services/types';
import { FormCKEditor, FormCustom } from '@/components';
import { Upload } from '@/components';
import { DataFieldInputType } from '@/ts/types';
import { validator } from '@/utils';

type Props = {
  control: Control<InputBlog, unknown>;
  errors: FieldErrors<InputBlog>;
  disable: boolean;
};

const BlogForm: FC<Props> = ({ control, errors, disable = false }) => {
  const dataFormCustom: DataFieldInputType<InputBlog>[] = useMemo(
    () => [
      {
        isRequired: true,
        control,
        name: 'title',
        element: ({ field }) => (
          <FormControl fullWidth>
            <TextField
              {...field}
              error={errors.title ? true : false}
              disabled={disable}
              name="title"
              label="Title"
            />
            {errors.title && (
              <FormHelperText error>{errors.title.message}</FormHelperText>
            )}
          </FormControl>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'shortDesc',
        element: ({ field }) => (
          <FormControl fullWidth>
            <TextField
              {...field}
              error={errors.title ? true : false}
              disabled={disable}
              name="shortDesc"
              label="Short description"
            />
            {errors.shortDesc && (
              <FormHelperText error>{errors.shortDesc.message}</FormHelperText>
            )}
          </FormControl>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'category',
        element: ({ field }) => (
          <FormControl fullWidth>
            <CategoryFormItem
              {...field}
              error={errors.category ? true : false}
              disabled={disable}
            />
            {errors.category && (
              <FormHelperText error>{errors.category.message}</FormHelperText>
            )}
          </FormControl>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'thumbnail',
        element: ({ field }) => (
          <FormControl fullWidth>
            <Upload {...field} disable={disable} />
            {errors.thumbnail && (
              <FormHelperText error>{errors.thumbnail.message}</FormHelperText>
            )}
          </FormControl>
        ),
      },
    ],
    [control, disable, errors],
  );

  return (
    <Box className="flex flex-col gap-8">
      <FormCustom data={dataFormCustom} />
      <Box>
        <Typography>Content blog:</Typography>
        <FormCKEditor
          control={control as unknown as Control<FieldValues>}
          name="content"
          error={errors.content ? errors.content.message : ''}
          rules={validator('required')}
          isDisabled={disable}
        />
      </Box>
    </Box>
  );
};

export default BlogForm;
