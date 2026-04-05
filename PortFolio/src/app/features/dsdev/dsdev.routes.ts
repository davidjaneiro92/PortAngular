import { Routes } from '@angular/router';

export const DSDEV_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../../layout/dsdev-layout/dsdev-layout.component').then(m => m.DsdevLayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./landing/landing.component').then(m => m.LandingComponent) },
      { path: 'servicos', loadComponent: () => import('./servicos/servicos.component').then(m => m.ServicosComponent) },
      { path: 'integracoes', loadComponent: () => import('./integracoes/integracoes.component').then(m => m.IntegracoesComponent) },
      { path: 'projetos', loadComponent: () => import('./projetos/projetos.component').then(m => m.ProjetosComponent) },
      { path: 'diferenciais', loadComponent: () => import('./diferenciais/diferenciais.component').then(m => m.DiferenciaisComponent) },
      { path: 'contato', loadComponent: () => import('./contato/contato.component').then(m => m.ContatoComponent) },
    ]
  }
];
