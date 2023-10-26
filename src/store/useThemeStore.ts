import { type Theme } from '@styles/themes';
import { withSelector } from './middleware';
import { devtools, persist } from 'zustand/middleware';
import { create } from 'zustand';

type ThemeState = {
  mode: Theme;
};
interface ThemeAction {
  setMode: (mode: Theme) => void;
  toggleMode: () => void;
}

const themeStore = (): ThemeState => ({
  mode: 'dark',
});

export const useThemeStore = create(devtools<ThemeState>(themeStore, { name: 'themeStore' }));

export const useThemeAction = (): ThemeAction => ({
  setMode: (mode: Theme) => {
    useThemeStore.setState(() => ({ mode }));
  },
  toggleMode: () =>
    useThemeStore.setState((state) => {
      const mode = state.mode === 'dark' ? 'light' : 'dark';
      return { mode };
    }),
});

export const useThemeSelector = withSelector(useThemeStore);
