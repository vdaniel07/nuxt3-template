import type { ThemeDefinition } from 'vuetify';

// background: "#FFFFFF",
// surface: "#FFFFFF",
// primary: twColors.indigo[600],
// secondary: twColors.purple[600],
// error: twColors.red[500],
// info: twColors.blue[500],
// success: twColors.emerald[500],
// warning: twColors.amber[500],

// String that represents the name of the theme I am using
export const LIGHT_THEME = 'light';
// Light mode theme
export const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#f1efe0',
    // surface: '#FFFFFF',
    primary: '#4C87C6', // '#0096C7', //'#0B8CCF', //'#4485ba', //'#00a1de',
    'on-background': '#0e0e0e',
    'on-surface': '#0e0e0e'
  }
};

// String that represents the name of the dark theme I am using
export const DARK_THEME = 'dark';
// Dark mode theme
export const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#303030',
    surface: '#424242',
    primary: '#4C87C6B3' // '#0B8CCF' //'#4485ba'
  }
};
