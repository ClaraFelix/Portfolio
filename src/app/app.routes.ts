import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/pages/home',
    pathMatch: 'full',
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.routes').then((m) => m.PAGES_ROUTES),
  },
];
