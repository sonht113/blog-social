import React from 'react';

import {
  Popover,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { PROFILE_LIST_ITEM } from '../constant';

const InfoProfile = () => {
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

  return (
    <>
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
        <List sx={style}>
          {PROFILE_LIST_ITEM.map((el) => (
            <Link to={el.path} key={el.id}>
              <ListItem>
                <ListItemText primary={el.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Popover>
    </>
  );
};

export default InfoProfile;
