import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'login', 
    loadComponent: () =>
      import('./features/authentication/components/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
];
