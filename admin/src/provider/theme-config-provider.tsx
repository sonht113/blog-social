import { ReactElement, useCallback, useEffect } from 'react';

import { ConfigProvider, theme as ThemeConfig } from 'antd';

import { COLOR } from '@/data';
import { useThemeStore } from '@/hooks';

type Props = {
  children: ReactElement;
};

function LayoutConfigProvider({ children }: Props) {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const setThemeState = useCallback(
    (dark = true) => {
      setTheme({
        theme: dark ? 'dark' : 'light',
      });
    },
    [setTheme],
  );

  const matchMode = useCallback(
    (e: MediaQueryListEvent) => {
      setThemeState(e.matches);
    },
    [setThemeState],
  );

  useEffect(() => {
    setThemeState(theme === 'dark');

    // watch system theme change
    if (!localStorage.getItem('theme')) {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');

      mql.addEventListener('change', matchMode);
    }
  }, [matchMode, setThemeState, theme]);

  return (
    <ConfigProvider
      componentSize="middle"
      theme={{
        token: {
          colorPrimary:
            COLOR[theme === 'dark' ? 'DARK_PRIMARY' : 'LIGHT_PRIMARY'],
          fontFamily: 'Roboto',
        },
        algorithm:
          theme === 'dark'
            ? ThemeConfig.darkAlgorithm
            : ThemeConfig.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default LayoutConfigProvider;
