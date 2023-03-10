import * as dotenv from 'dotenv';

dotenv.config();

export class Config {
    // App
    APP_NAME = 'Postgraphile TS';
    APP_VERSION = '1.0.0';
    APP_CLI_DESCRIPTION = 'Comandos de apoio a aplicação.';

    // Web Server
    WEB_HOST = '0.0.0.0';
    WEB_PORT = parseInt(process.env.PORT || '3000');

    // Postgres
    PG_URL = process.env.GRAPHILE_DATABASE_URL;
    PG_ROOT_URL = process.env.ROOT_DATABASE_URL;
    PG_SCHEMA = process.env.GRAPHILE_SCHEMA;
    PG_ENV = process.env.GRAPHILE_ENV || 'production';

    // JWT
    JWT_TOKEN_IDENTIFIER = process.env.JWT_TOKEN_IDENTIFIER || '';
    JWT_SECRET = process.env.JWT_SECRET || '';
    JWT_OPTIONS = { algorithm: 'HS256' as const, audience: 'postgraphile' };

    // Logger
    LOG_LEVEL = (process.env.LOG_LEVEL || 'INFO').toLocaleLowerCase();
}

export default new Config();
