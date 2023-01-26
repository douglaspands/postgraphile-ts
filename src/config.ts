import * as dotenv from 'dotenv';

dotenv.config();

class Config {
    // App
    APP_NAME = 'Postgraphile TS';
    APP_VERSION = '1.0.0';
    APP_CLI_DESCRIPTION = 'Comandos de apoio a aplicação.';

    // Postgres
    PG_URL = process.env.DATABASE_URL;
    PG_SCHEMA = process.env.GRAPHILE_SCHEMA;
    PG_ENV = process.env.GRAPHILE_ENV || 'production';
    PG_ROOT_URL = process.env.ROOT_DATABASE_URL || '';

    // JWT
    JWT_TOKEN_IDENTIFIER = process.env.JWT_TOKEN_IDENTIFIER || '';
    JWT_SECRET = process.env.JWT_SECRET || '';

    // Logger
    LOG_LEVEL = (process.env.LOG_LEVEL || 'INFO').toLocaleLowerCase();
}

export default new Config();
