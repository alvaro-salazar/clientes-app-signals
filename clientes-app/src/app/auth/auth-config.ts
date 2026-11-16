import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8090/realms/curso-springboot',
  clientId: 'angular-client',
  redirectUri: window.location.origin + '/',
  postLogoutRedirectUri: window.location.origin + '/',
  responseType: 'code',
  scope: 'openid profile email',
  requireHttps: false,
  showDebugInformation: false,
};
