import { Routes } from '@angular/router';

export const routes: Routes = [
  // Ruta de bienvenida.
  {
    path: 'welcome',
    title: 'Bienvenido',
    loadComponent: () =>
      import('./app/pages/welcome/welcome.component').then(
        (m) => m.welcome // Asegúrate de que este es el nombre correcto del componente.
      ),
    children: [
      // Ruta hija para reservas.
      {
        path: 'reservas',
        title: 'Reservas',
        loadComponent: () =>
          import('./app/pages/reservations/Reservations.component').then(
            (m) => m.ReservationsComponent
          ),
      },
    ],
  },

  // Ruta por defecto al dirigir a la aplicación.
  {
    path: '',
    redirectTo: 'reservas',
    pathMatch: 'full',
  },

  // Ruta de error para enlaces no válidos.
  {
    path: '**',
    title: 'Ups, ¡Parece que tenemos un problema!',
    loadComponent: () =>
      import('./app/components/error/PageNotFoundComponent.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
];
