import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth-service';

export const sesionIniciada: CanActivateFn = () => {
  const auth = inject(AuthService);
  if (auth.autenticado()) return true;
  auth.entrar();
  return false;
};
