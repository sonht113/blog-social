import React, { FC } from 'react';

import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Drawer, List } from '@mui/material';

import MenuItem from './menu-items';
import { HEADER_LIST_ITEM } from '../constant';

type Props = {
  className?: string;
};
type Anchor = 'top' | 'left' | 'bottom' | 'right';

const MenuMobile: FC<Props> = ({ className }) => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="flex flex-col gap-5 justify-start">
        {HEADER_LIST_ITEM.map((el) => (
          <MenuItem key={el.id} text={el.text} path={el.path} />
        ))}
      </List>
    </Box>
  );

  return (
    <div className={`${className}`}>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className="xl:hidden"
          >
            <div className="w-full flex justify-between px-4 py-4 items-center">
              <span className="text-xl font-bold">MENU</span>
              <button onClick={toggleDrawer(anchor, false)}>
                <CancelOutlinedIcon />
              </button>
            </div>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MenuMobile;
