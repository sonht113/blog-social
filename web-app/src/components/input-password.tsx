import React from 'react';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
} from '@mui/material';

type Props = OutlinedInputProps;

export function InputPassword({
  onChange,
  value,
  error,
  required,
  ...props
}: Props) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <InputLabel
        error={error}
        htmlFor="standard-adornment-password"
        className="bg-slate-700"
      >
        Password
      </InputLabel>
      <OutlinedInput
        {...props}
        error={error}
        onChange={onChange}
        value={value}
        id="standard-adornment-password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  );
}
