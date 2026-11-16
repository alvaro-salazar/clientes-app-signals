import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from './auth-service';

// Solo las peticiones que van a este destino llevarán el token.
const API = 'http://localhost:8080/';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  // 1. ¿Va a nuestro servicio? Si no, se deja pasar intacta.
  if (!req.url.startsWith(API)) {
    return next(req);
  }

  const auth = inject(AuthService);
  const token = auth.token;

  // 2. La petición es INMUTABLE: hay que clonarla con la cabecera añadida.
  const peticion = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  // 3. La respuesta vuelve por aquí, así que aquí se reacciona al rechazo.
  return next(peticion).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) auth.entrar();
      return throwError(() => error);
    })
  );
};
