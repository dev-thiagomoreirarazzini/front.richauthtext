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
  {
    path: 'register',
    loadComponent: () =>
      import('./features/authentication/components/register/register.component').then(
        (c) => c.RegisterComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then(
        (m) => m.HomeComponent
      ),
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./features/profile/profile.component').then(
            (m) => m.ProfileComponent
          )
      },
      {
        path: 'my-notes', loadComponent: () => import('./features/notes/my-notes.component')
          .then(m => m.MyNotesComponent)
      },
      {
        path: 'shared-notes', loadComponent: () => import('./features/notes/shared-notes.component')
          .then(m => m.SharedNotesComponent)
      },
      {
        path: 'settings', loadComponent: () => import('./features/settings/settings.component')
          .then(m => m.SettingsComponent)
      },
    ]
  }
];
