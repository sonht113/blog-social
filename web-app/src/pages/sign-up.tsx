import { FC, useMemo } from 'react';

import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import { ConfirmButton, FormCustom, InputPassword } from '@/components';
import { LOGIN_PATH } from '@/data';
import { useSignUpMutation } from '@/features/auth';
import { DataFieldInputType } from '@/ts/types';

type Inputs = {
  fullname: string;
  email: string;
  phoneNumber: string;
  username: string;
  password: string;
};

const SignUp: FC = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [signup, { loading }] = useSignUpMutation();

  const dataFormCustom: DataFieldInputType<Inputs>[] = useMemo(
    () => [
      {
        isRequired: true,
        control,
        name: 'fullname',
        element: ({ field }) => (
          <FormControl fullWidth>
            <TextField
              {...field}
              error={errors.fullname ? true : false}
              name="fullname"
              id="outlined-basic"
              label="Fullname"
            />
            {errors.fullname && (
              <FormHelperText error>{errors.fullname.message}</FormHelperText>
            )}
          </FormControl>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'username',
        element: ({ field }) => (
          <FormControl fullWidth>
            <TextField
              {...field}
              error={errors.username ? true : false}
              name="username"
              id="outlined-basic"
              label="Username"
            />
            {errors.username && (
              <FormHelperText error>{errors.username.message}</FormHelperText>
            )}
          </FormControl>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'email',
        element: ({ field }) => (
          <FormControl fullWidth>
            <TextField
              {...field}
              error={errors.email ? true : false}
              name="email"
              id="outlined-basic"
              label="Email"
            />
            {errors.email && (
              <FormHelperText error>{errors.email.message}</FormHelperText>
            )}
          </FormControl>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'phoneNumber',
        element: ({ field }) => (
          <FormControl fullWidth>
            <TextField
              {...field}
              error={errors.phoneNumber ? true : false}
              name="phoneNumber"
              id="outlined-basic"
              label="Phone number"
            />
            {errors.phoneNumber && (
              <FormHelperText error>
                {errors.phoneNumber.message}
              </FormHelperText>
            )}
          </FormControl>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'password',
        element: ({ field: { onChange, value } }) => (
          <FormControl fullWidth>
            <InputPassword
              onChange={onChange}
              value={value as string}
              error={errors.password ? true : false}
            />
            {errors.password && (
              <FormHelperText error>{errors.password.message}</FormHelperText>
            )}
          </FormControl>
        ),
      },
    ],
    [control, errors],
  );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    void signup({
      variables: { body: data },
      onCompleted: () => {
        toast.success('Sign up successfully');
        navigate(LOGIN_PATH);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <div className="w-4/5 h-screen mx-auto flex justify-center items-center">
      <Grid
        container
        spacing={2}
        className="w-3/4 h-5/6 bg-slate-700"
        alignItems="center"
      >
        <Grid
          item
          xs={0}
          sm={0}
          md={6}
          className="hidden md:flex justify-center items-center"
        >
          <img
            src="bg-auth.png"
            alt="bg-login"
            className="object-cover w-3/4"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h4" align="center">
            Sign-up
          </Typography>
          <Typography variant="h6" align="center">
            Welcome to Blog Dev
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            className="w-3/4 flex flex-col justify-center items-center mx-auto gap-6 mt-6"
          >
            <FormCustom data={dataFormCustom} />
            <Typography variant="body2">
              You have an account?{' '}
              <Link to={LOGIN_PATH} className="underline text-slate-800">
                Login
              </Link>{' '}
              here!
            </Typography>
            <ConfirmButton isLoading={loading} variant="contained">
              Submit
            </ConfirmButton>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
