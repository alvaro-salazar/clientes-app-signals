# clientes-app — fin del codelab 2

Estado del proyecto al terminar **Inicio de Sesión con Keycloak: PKCE, Interceptor y Roles**
(`angular-login-keycloak-signals`), que es el último de la línea corta.

## Qué hay aquí

| Ruta | Qué es |
|---|---|
| `clientes-app/` | La aplicación Angular 22 con sesión real: login PKCE, interceptor, guarda y roles |
| `compose.yml` | PostgreSQL, Keycloak y `cliente-service:keycloak`, el servicio que **sí** valida tokens |
| `keycloak/realm-export.json` | El realm `curso-springboot` con sus clients, roles y usuarios de prueba |

## Cómo levantarlo

Node 22.22.3 o posterior, 24.15.0 o posterior, o 26.

```bash
docker compose up -d                   # postgres + keycloak (8090) + cliente-service (8080)
cd clientes-app
npm install
ng serve                               # aplicación en el 4200
```

Usuarios de prueba del realm:

| Usuario | Contraseña | Rol | Puede crear clientes |
|---|---|---|---|
| `alice` | `alice123` | USER | no — el botón no aparece y el servidor responde 403 |
| `admin_user` | `admin123` | ADMIN | sí |

## Qué cambió respecto al codelab 1

```bash
git diff codelab/clientes-01-fin codelab/clientes-02-fin -- clientes-app/src
```

Aparecen el directorio `auth/` completo, el `app.config.ts` con la configuración de OAuth, la
cabecera, las rutas con guarda y el botón de crear condicionado al rol. **`cliente-service.ts` no
aparece en ese diff**, y esa es la lección del codelab: la autenticación quedó fuera del servicio
de datos.

## El otro lado

Validar la firma del token, sacar los roles de `realm_access` y cerrar cada operación con
`@PreAuthorize` es lo que trae hecha la imagen `cliente-service:keycloak`. Ese código se escribe a
mano en **Spring Boot 07 — OAuth2 y Keycloak** (`spring-boot-07-oauth2-keycloak`), que pertenece a
la serie de Spring Boot y parte de su propio proyecto.
