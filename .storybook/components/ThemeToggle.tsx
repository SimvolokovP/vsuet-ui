import { IconButton } from '@storybook/components';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useGlobals } from 'storybook/manager-api';

export const ThemeToggle = () => {
  const [globals, updateGlobals] = useGlobals();
  const isDark = globals.theme === 'dark';

  const toggleTheme = () => {
    updateGlobals({
      theme: isDark ? 'light' : 'dark',
    });
  };

  return (
    <IconButton
      key="theme-toggle"
      title="Toggle theme"
      onClick={toggleTheme}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};