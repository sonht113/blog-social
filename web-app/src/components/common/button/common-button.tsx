import { ElementType, Fragment } from 'react';

import { Button, ButtonProps } from '@mui/material';
import { Link } from 'react-router-dom';

const variants = {
  redirect: {
    type: 'primary',
  },
};

type Props = ButtonProps & {
  actionBtn: keyof typeof variants;
};

export function CommonButton({ children, href, actionBtn, ...rest }: Props) {
  const Component: ElementType = href ? Link : Fragment;
  return (
    <Component {...(href ? { to: href } : {})}>
      <Button {...(variants[actionBtn] as ButtonProps)} {...rest}>
        {children}
      </Button>
    </Component>
  );
}
