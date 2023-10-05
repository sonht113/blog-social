import { create } from 'zustand';

type ThemeStore = {
  theme: 'dark' | 'light';
  setTheme: (_: { theme: ThemeStore['theme'] }) => void;
};

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';
const userTheme = localStorage.getItem('theme') as ThemeStore['theme'];

const useThemeStore = create<ThemeStore>()((set) => ({
  theme: userTheme || 'dark' || systemTheme,
  setTheme: ({ theme }: { theme: ThemeStore['theme'] }) => {
    const body = document.body;

    if (theme === 'dark') {
      if (!body.hasAttribute('theme-mode')) {
        body.setAttribute('theme-mode', 'dark');
      }
    } else {
      if (body.hasAttribute('theme-mode')) {
        body.removeAttribute('theme-mode');
      }
    }

    set({
      theme,
    });
  },
}));

export default useThemeStore;
