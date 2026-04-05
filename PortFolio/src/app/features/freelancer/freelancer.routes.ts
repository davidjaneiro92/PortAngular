import { Routes } from '@angular/router';
import { FreelancerLayoutComponent } from '../../layout/freelancer-layout/freelancer-layout.component';

export const FREELANCER_ROUTES: Routes = [
  {
    path: '',
    component: FreelancerLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./landing/landing.component').then(m => m.LandingComponent)
      },
      {
        path: 'servicos',
        loadComponent: () =>
          import('./servicos/servicos.component').then(m => m.ServicosComponent)
      },
      {
        path: 'projetos',
        loadComponent: () =>
          import('./projetos/projetos.component').then(m => m.ProjetosFreelancerComponent)
      },
      {
        path: 'diferenciais',
        loadComponent: () =>
          import('./diferenciais/diferenciais.component').then(m => m.DiferenciaisComponent)
      },
      {
        path: 'contato',
        loadComponent: () =>
          import('./contato/contato.component').then(m => m.ContatoFreelancerComponent)
      }
    ]
  }
];
