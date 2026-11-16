# clientes-app — fin del codelab 1

Estado del proyecto al terminar **Angular desde Cero: una Aplicación de Clientes con Señales**
(`angular-crud-signals-desde-cero`).

Esta rama existe para quien quiera empezar el codelab 2 sin haber hecho el 1, o para comparar su
propio avance con el estado esperado.

## Qué hay aquí

| Ruta | Qué es |
|---|---|
| `clientes-app/` | La aplicación Angular 22: CRUD completo de clientes con señales |
| `compose.yml` | PostgreSQL y `cliente-service:codelab-06`, el servicio **sin** protección |

La carpeta de trabajo reproduce la del codelab: el `compose.yml` va **al lado** de `clientes-app`,
no dentro.

## Cómo levantarlo

Node 22.22.3 o posterior, 24.15.0 o posterior, o 26. Versiones anteriores fallan con `EBADENGINE`.

```bash
docker compose --profile app up -d     # servicio de clientes en el 8080
cd clientes-app
npm install
ng serve                               # aplicación en el 4200
```

El servicio tarda un par de minutos en responder la primera vez: crea las tablas y siembra
12 clientes y 8 regiones. Hasta entonces la lista aparece vacía.

## Lo que sigue

El codelab 2 es **Inicio de Sesión con Keycloak: PKCE, Interceptor y Roles**
(`angular-login-keycloak-signals`), y su estado final está en la rama `codelab/clientes-02-fin`.
