import { FC } from 'react';

import { FormControl, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { ConfirmButton, InputDatePicker, InputPassword } from '@/components';
import { LOGIN_PATH } from '@/data';

const SignUp: FC = () => {
  return (
    <div className="w-4/5 h-screen mx-auto flex justify-center items-center">
      <Grid
        container
        spacing={2}
        className="w-3/4 h-3/4 bg-slate-500"
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
          <form className="w-3/4 flex flex-col justify-center items-center mx-auto gap-5 mt-10">
            <FormControl variant="outlined" fullWidth>
              <TextField
                name="fullname"
                id="outlined-basic"
                label="Fullname"
                required
              />
            </FormControl>
            <FormControl variant="outlined" fullWidth>
              <TextField
                name="email"
                id="outlined-basic"
                label="Email"
                required
              />
            </FormControl>
            <FormControl variant="outlined" fullWidth>
              <InputDatePicker label="Day of birth" disableFuture />
            </FormControl>
            <FormControl variant="outlined" fullWidth>
              <TextField
                name="phoneNumber"
                id="outlined-basic"
                label="Phone number"
                required
              />
            </FormControl>
            <FormControl variant="outlined" fullWidth>
              <TextField
                name="username"
                id="outlined-basic"
                label="Username"
                required
              />
            </FormControl>
            <InputPassword />
            <Typography variant="body2">
              You have an account?{' '}
              <Link to={LOGIN_PATH} className="underline text-slate-800">
                Login
              </Link>{' '}
              here!
            </Typography>
            <ConfirmButton variant="contained">Submit</ConfirmButton>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
