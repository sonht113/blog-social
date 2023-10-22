import React, { ElementType, Fragment, useEffect } from 'react';

import {
  Popover,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

import { PROFILE_LIST_ITEM } from '../constant';
import { useAuthStore, useLogoutMutation } from '@/features/auth';
import { useQueryInfoUser } from '@/hooks';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

const InfoProfile = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const { data } = useQueryInfoUser();
  const { logout } = useLogoutMutation();

  const handleLogout = () => {
    void logout();
    void toast.success('Logout successfully');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    if (data) {
      setUser(data.getInfo);
    }
  }, [data, setUser]);

  return (
    <>
      <Button aria-describedby={id} onClick={handleClick}>
        <Avatar alt={data?.getInfo.fullname} src={data?.getInfo.avatar} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <List sx={style}>
          {PROFILE_LIST_ITEM.map((el) => {
            const Component: ElementType = el.path ? Link : Fragment;

            return (
              <Component
                {...(el.path
                  ? {
                      to:
                        el.id === 1
                          ? el.path + `/${data?.getInfo.id}`
                          : el.path,
                    }
                  : {})}
                key={el.id}
              >
                <ListItem
                  className="cursor-pointer"
                  {...(el.path ? {} : { onClick: handleLogout })}
                >
                  <ListItemText primary={el.name} />
                </ListItem>
              </Component>
            );
          })}
        </List>
      </Popover>
    </>
  );
};

export default InfoProfile;
