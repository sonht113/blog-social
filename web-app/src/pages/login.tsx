import { FC, useEffect } from 'react';

import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import { ConfirmButton, InputPassword } from '@/components';
import { HOME_PATH, SIGN_UP_PATH } from '@/data';
import { useAuthStore, useLoginMutation } from '@/features/auth';

type Inputs = {
  username: string;
  password: string;
};

const Login: FC = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const tokenLocal = localStorage.getItem('token');

  const { token, loginUser } = useAuthStore((state) => ({
    token: state.token,
    loginUser: state.loginUser,
  }));

  const [login, { loading }] = useLoginMutation();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    void login({
      variables: { body: data },
      onCompleted: (data) => {
        void loginUser(data?.login);
        void toast.success('Login successfully');
      },
      onError: () => {
        void toast.error('Username or password invalid');
      },
    });
  };

  useEffect(() => {
    if (token || tokenLocal) {
      navigate(HOME_PATH, { replace: true });
    }
  }, [navigate, token, tokenLocal]);

  return (
    <div className="w-4/5 h-screen mx-auto flex justify-center items-center">
      <Grid
        container
        spacing={2}
        className="w-3/4 h-3/4 bg-slate-700 rounded-lg"
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
            Login
          </Typography>
          <Typography variant="h6" align="center">
            Welcome to Blog Dev
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            className="w-3/4 flex flex-col justify-center items-center mx-auto gap-5 mt-10"
          >
            <Controller
              control={control}
              rules={{ required: 'This field is required' }}
              render={({ field }) => (
                <FormControl fullWidth>
                  <TextField
                    {...field}
                    error={errors.username ? true : false}
                    name="username"
                    id="outlined-basic"
                    label="Username"
                  />
                  {errors.username && (
                    <FormHelperText error>
                      {errors.username.message}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
              name="username"
            />

            <Controller
              control={control}
              rules={{ required: 'This field is required', minLength: 8 }}
              render={({ field: { onChange, value } }) => (
                <FormControl fullWidth>
                  <InputPassword
                    onChange={onChange}
                    value={value}
                    error={errors.password ? true : false}
                  />
                  {errors.password && (
                    <FormHelperText error>
                      {errors.password.message}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
              name="password"
            />
            <ConfirmButton isLoading={loading} variant="contained">
              Submit
            </ConfirmButton>
            <Typography variant="body2">
              You haven&apos;t an account?{' '}
              <Link to={SIGN_UP_PATH} className="underline text-slate-400">
                Sign up
              </Link>{' '}
              here!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
