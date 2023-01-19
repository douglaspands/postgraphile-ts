import * as dotenv from 'dotenv';

dotenv.config();

class Config {
    // Postgres
    POSTGRES_USER = process.env.POSTGRES_USER;
    POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
    POSTGRES_DB = process.env.POSTGRES_DB;
    POSTGRES_HOST = process.env.POSTGRES_HOST;
    POSTGRES_SCHEMA = process.env.POSTGRES_SCHEMA;
    POSTGRES_PORT = process.env.POSTGRES_PORT;
    POSTGRES_ENV = process.env.POSTGRES_ENV || 'production';

    // Logger
    LOG_LEVEL = (process.env.LOG_LEVEL || 'INFO').toLocaleLowerCase();

    // App
    APP_NAME = 'Postgraphile TS';
    APP_VERSION = '1.0.0';
    APP_CLI_DESCRIPTION = 'Comandos de apoio a aplicação.';

    // Propriedades
    // URL de conexão do Postgres
    get DATABASE_URL(): string {
        return `postgres://${this.POSTGRES_USER}:${this.POSTGRES_PASSWORD}@${this.POSTGRES_HOST}:${this.POSTGRES_PORT}/${this.POSTGRES_DB}`;
    }
}

export default new Config();
