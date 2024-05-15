export type TModule = 'dashboard' | 'action' | 'admin';

interface ISubItem {
  title: string;
  icon: string;
  to: string;
}

export interface IDrawerItem {
  title?: string;
  icon?: string;
  to?: string;
  module?: TModule;
  heading?: string;
  active?: boolean;
  divider?: boolean;
  roles?: TRole[];
  subItems?: ISubItem[];
}

export const drawerItems: IDrawerItem[] = [
  // { heading: 'Apps' },
  // { divider: true },
  // { title: 'Ajout résutats', icon: 'mdi-plus-box', to: '/results', module: 'action' },
  // { title: 'Dashboard résultats', icon: 'mdi-view-dashboard', to: '/dashboard/result', module: 'dashboard' },
  // { title: 'Dashboard produits', icon: 'mdi-view-dashboard', to: '/dashboard/product', module: 'dashboard' },
  // { title: 'Produits', icon: 'mdi-chip', to: '/products', module: 'dashboard' },
  { title: 'Configuration', icon: 'mdi-cog', to: '/config', module: 'dashboard' }
  // { title: 'Test', icon: 'mdi-alarm-light', to: '/test' },
];

// fix: Requested module does not provide export named 'default' => https://github.com/nuxt/nuxt/issues/13247
export default {};
