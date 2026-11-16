import { Routes } from '@angular/router';
import { sesionIniciada } from './auth/sesion-iniciada';

export const routes: Routes = [
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
  {
    path: 'clientes',
    canActivate: [sesionIniciada],
    loadChildren: () => import('./clientes/clientes.routes').then(m => m.CLIENTES_ROUTES)
  }
];
