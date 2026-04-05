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
    path: 'freelancer',
    loadChildren: () =>
      import('./features/freelancer/freelancer.routes').then(m => m.FREELANCER_ROUTES)
  },
  { path: '**', redirectTo: '' }
];
