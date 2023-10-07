import { Button } from '@mui/material';
import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

import { useThemeStore } from '@/hooks';

const ThemeButton = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <Button
      onClick={() => {
        theme === 'dark'
          ? setTheme({ theme: 'light' })
          : setTheme({ theme: 'dark' });
      }}
      className="text-3xl"
    >
      {theme === 'dark' ? <BsFillSunFill /> : <BsMoonStarsFill />}
    </Button>
  );
};

export default ThemeButton;
