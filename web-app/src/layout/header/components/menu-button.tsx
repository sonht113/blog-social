import React, { FC } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { Divider, List, ListItem, ListItemText } from '@mui/material';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';

import { headerDatas } from '../utiil';

type Props = {
  className: string;
};

const MenuButton: FC<Props> = ({ className }) => {
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
    <div className={`${className}`}>
      <Button aria-describedby={id} onClick={handleClick}>
        <div className=" w-[30px] xl:hidden">
          <Button startIcon={<MenuIcon />}>MENU</Button>
        </div>
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
          {headerDatas &&
            headerDatas.map((el) => (
              <div key={el.id}>
                <ListItem button>
                  <ListItemText primary={el.text} />
                </ListItem>
                <Divider />
              </div>
            ))}
        </List>
      </Popover>
    </div>
  );
};

export default MenuButton;
