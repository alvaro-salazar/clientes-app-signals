import { Service, inject, signal, computed } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth-config';

interface CargaDelToken {
  preferred_username?: string;
  realm_access?: { roles?: string[] };
}

function leerCarga(token: string): CargaDelToken | null {
  try {
    const base64url = token.split('.')[1];
    const base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
    const relleno = '='.repeat((4 - (base64.length % 4)) % 4);
    return JSON.parse(atob(base64 + relleno)) as CargaDelToken;
  } catch {
    return null;
  }
}

@Service()
export class AuthService {

  private oauth = inject(OAuthService);

  // El estado de la sesión, en una sola señal privada.
  private carga = signal<CargaDelToken | null>(null);

  // Lo que el resto de la aplicación consulta, todo derivado de la anterior.
  readonly autenticado = computed(() => this.carga() !== null);
  readonly usuario     = computed(() => this.carga()?.preferred_username ?? '');
  readonly roles       = computed(() => this.carga()?.realm_access?.roles ?? []);
  readonly esAdmin     = computed(() => this.roles().includes('ADMIN'));

  async iniciar(): Promise<void> {
    this.oauth.configure(authConfig);
    await this.oauth.loadDiscoveryDocumentAndTryLogin();
    this.oauth.setupAutomaticSilentRefresh();
    this.sincronizar();
  }

  entrar(): void {
    this.oauth.initCodeFlow();
  }

  salir(): void {
    this.carga.set(null);
    this.oauth.logOut();
  }

  get token(): string | null {
    return this.oauth.getAccessToken();
  }

  private sincronizar(): void {
    const t = this.oauth.getAccessToken();
    this.carga.set(t ? leerCarga(t) : null);
  }
}
