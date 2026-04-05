import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/profissional/profissional.component').then(m => m.ProfissionalComponent)
      }
    ]
  },
  {
    path: 'dsdev',
    loadChildren: () =>
      import('./features/dsdev/dsdev.routes').then(m => m.DSDEV_ROUTES)
  },
  { path: '**', redirectTo: '' }
];
