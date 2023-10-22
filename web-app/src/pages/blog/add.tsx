import { FC } from 'react';

import { Box, Container, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { ConfirmButton } from '@/components';
import { BlogForm, InputBlog } from '@/features/blog';
import { useCreateBlogMutation } from '@/features/blog';
import { useQueryInfoUser } from '@/hooks';

const defaultValueForm = {
  title: '',
  shortDesc: '',
  category: 0,
  thumbnail: '',
  content: '',
};

const AddBlog: FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputBlog>({ defaultValues: defaultValueForm });

  const { data: user } = useQueryInfoUser();
  const [createBlog, { loading }] = useCreateBlogMutation();

  const onSubmit: SubmitHandler<InputBlog> = (data) => {
    void createBlog({
      variables: {
        body: {
          ...data,
          creator: user?.getInfo.id,
        },
      },
      onCompleted: () => {
        toast.success('Create blog successfully');
        reset(defaultValueForm);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <Container className="relative">
      <Typography variant="h5" fontWeight={700}>
        Hi, {user?.getInfo.fullname}🤗
      </Typography>
      <Typography variant="body1">
        Let&apos;s create a blog for yourself!
      </Typography>

      <Container className="mt-5">
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <BlogForm control={control} errors={errors} disable={loading} />
          <Box className="fixed bottom-10 right-10">
            <ConfirmButton isLoading={loading} variant="contained">
              Submit
            </ConfirmButton>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default AddBlog;
