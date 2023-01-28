import { Express } from 'express';
import { postgraphile } from 'postgraphile';
import config from '@config';
import postGraphQL from '@core/postgraphql';
import pg from '@core/pg';

function initApp(app: Express): void {
    app.use(
        postgraphile(
            pg.createConnection(),
            config.PG_SCHEMA,
            postGraphQL.getOptions(config.PG_ENV),
        ),
    );
}

export default { initApp };
