import { Express } from 'express';
import { postgraphile } from 'postgraphile';
import config from '@config';
import postGraphQL from '@app/core/postgraphql';

function initApp(app: Express): void {
    app.use(
        postgraphile(
            config.DATABASE_URL,
            config.POSTGRES_SCHEMA,
            postGraphQL.getOptions(config.POSTGRES_ENV),
        ),
    );
}

export default { initApp };
