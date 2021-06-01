import { Routes } from '@angular/router';
import { DevHostComponent } from './dev-host/dev-host.component';

export const routes: Routes = [
  {
    path: 'overview',
    loadChildren: () =>
      import('./overview/overview.module').then((m) => m.OverviewModule),
  },
  {
    path: 'dev-host',
    component: DevHostComponent,
  },
  {
    path: '**',
    redirectTo: 'overview',
  },
];
