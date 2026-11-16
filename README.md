# clientes-app-signals

Proyecto de la **línea corta de Angular con señales**: dos codelabs que construyen una aplicación
de clientes completa, de la pantalla vacía a una sesión real contra un servidor de identidad.

Esta rama solo contiene este archivo. El código vive en las ramas de cada codelab, para que nadie
se encuentre con la aplicación terminada antes de construirla.

| Rama | Estado del proyecto | Codelab |
|---|---|---|
| `codelab/clientes-01-fin` | CRUD de clientes con señales, servicio sin protección | `angular-crud-signals-desde-cero` |
| `codelab/clientes-02-inicio` | El mismo árbol que la anterior: punto de entrada del codelab 2 | — |
| `codelab/clientes-02-fin` | Login PKCE, interceptor, guarda y roles | `angular-login-keycloak-signals` |

```bash
git clone https://github.com/alvaro-salazar/clientes-app-signals.git -b codelab/clientes-01-fin
```

Cada rama trae su propio `README.md` con los comandos para levantarla, y **la carpeta de trabajo
completa**: la aplicación Angular, el `compose.yml` y, en la del codelab 2, el realm de Keycloak.

Requisitos: Node 22.22.3 o posterior, 24.15.0 o posterior, o 26, y Docker.
