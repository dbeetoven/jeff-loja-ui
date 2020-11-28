import { HttpHeaders } from '@angular/common/http';

export const APP_HEADER = 'x-app';
export const APP_HEADER_VALUE = 'IT';
export const TOKEN_PREFIX = '';
export const SAML_TOKEN = '_samlToken';

export const DEFAULT_HEADERS = new HttpHeaders({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});
