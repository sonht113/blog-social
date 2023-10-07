import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

import { useThemeStore } from '@/hooks';

const ThemeButton = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <button
      onClick={() => {
        theme === 'dark'
          ? setTheme({ theme: 'light' })
          : setTheme({ theme: 'dark' });
      }}
      className="text-[30px]"
    >
      {theme === 'dark' ? <BsFillSunFill /> : <BsMoonStarsFill />}
    </button>
  );
};

export default ThemeButton;
