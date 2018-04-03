// src/app/auth/auth.config.ts
import { ENV } from './../core/env.config';

interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
};

export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'eOmESDemi7hFjCWHuLjbdEjc3f8UD16I',
    CLIENT_DOMAIN: 'projmanagement.auth0.com',
    AUDIENCE: 'http://localhost:8083/api/', // e.g., http://localhost:8083/api/
    REDIRECT: `${ENV.BASE_URI}/callback`,
    SCOPE: 'openid profile'
};