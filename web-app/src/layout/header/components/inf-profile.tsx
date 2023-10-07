import React from 'react';

import {
  Popover,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

const InfProfile = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

  const profileListOps = [
    { id: 1, name: 'View Profile', path: '/view-profile' },
    { id: 2, name: 'Edit Profile', path: '/edit-profile' },
    { id: 3, name: 'Setting', path: '/setting' },
  ];

  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick}>
        <Avatar
          alt="Cindy Baker"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Nji70n0nKnujZh_As_Klbd6AKI9a9vl4Ag&usqp=CAU"
        />
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
        <List sx={style} component="nav" aria-label="mailbox folders">
          {profileListOps &&
            profileListOps.map((el) => (
              <div key={el.id}>
                <ListItem button>
                  <ListItemText primary={el.name} />
                </ListItem>
                <Divider />
              </div>
            ))}
        </List>
      </Popover>
    </div>
  );
};

export default InfProfile;
