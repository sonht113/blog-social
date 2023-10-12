import { Fragment } from 'react';

import { Button, ButtonProps, CircularProgress } from '@mui/material';

type Props = ButtonProps & {
  isLoading?: boolean;
};

export function ConfirmButton({ isLoading, children, ...props }: Props) {
  return (
    <Button
      type="submit"
      startIcon={
        isLoading ? (
          <CircularProgress size={20} color="error" />
        ) : (
          <Fragment></Fragment>
        )
      }
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </Button>
  );
}
