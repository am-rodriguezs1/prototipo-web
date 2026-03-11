import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./core/layout/app-layout/app-layout.component').then(m => m.AppLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'alarmas',
        loadComponent: () =>
          import('./features/alarmas/gestor-alarmas/gestor-alarmas.component').then(m => m.GestorAlarmasComponent)
      },
      {
        path: 'alarmas/nueva',
        loadComponent: () =>
          import('./features/alarmas/crear-alarma/crear-alarma.component').then(m => m.CrearAlarmaComponent)
      },
      {
        path: 'alarmas/importar',
        loadComponent: () =>
          import('./features/alarmas/importacion-masiva/importacion-masiva.component').then(m => m.ImportacionMasivaComponent)
      },
    ]
  },
  { path: '**', redirectTo: 'login' }
];
