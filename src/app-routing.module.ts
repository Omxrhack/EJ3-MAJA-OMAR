
import { Routes } from '@angular/router';
export const routes: Routes = [
  //Integracion de las rutas.
  {
    path: 'welcome',
    title: 'Bienvenido',
    loadComponent: () => import('./app/pages/welcome/welcome.component'),
  },
  //RUTA POR DEFECTO AL DIRIGIRSE.
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },

  //PAGINA DE ERROR
  {
    path: '**',
    title: 'Ups, ¡Parece que tenemos un problemas!',
    loadComponent: () => import('./app/components/error/PageNotFoundComponent.component'),
  },

];
