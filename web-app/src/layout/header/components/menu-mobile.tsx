import React, { FC } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Popover,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { HEADER_LIST_ITEM } from '../constant';

type Props = {
  className?: string;
};

const MenuMobile: FC<Props> = ({ className }) => {
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
        <List sx={style}>
          {HEADER_LIST_ITEM.map((el) => (
            <Link to={el.path} key={el.id} className="xl:hidden">
              <ListItem>
                <ListItemText primary={el.text} />
              </ListItem>
              <Divider />
            </Link>
          ))}
        </List>
      </Popover>
    </div>
  );
};

export default MenuMobile;
