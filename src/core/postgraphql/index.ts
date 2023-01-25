import logging from '@core/logging';
import pgSimplifyInflector from '@graphile-contrib/pg-simplify-inflector';
import { PostGraphileOptions } from 'postgraphile';
import { IncomingMessage } from 'http';
import ConnectionFilterPlugin from 'postgraphile-plugin-connection-filter';
import config from '@config';

const logger = logging.getLogger('postGraphQLCore');
type mixed = string | number | boolean | undefined | null;

async function pgSettings(req: IncomingMessage): Promise<{ [key: string]: mixed }> {
    /* TODO */
    logger.debug(JSON.stringify(req));
    return {
        jwtSecret: config.JWT_SECRET,
        jwtPgTypeIdentifier: config.JWT_TOKEN_IDENTIFIER,
    };
}

async function allowExplain(req: IncomingMessage): Promise<boolean> {
    // TODO: customise condition!
    logger.debug(JSON.stringify(req));
    return true;
}

class PostGraphQLOptionsBase {
    subscriptions = true;
    dynamicJson = true;
    setofFunctionsContainNulls = false;
    ignoreRBAC = false;
    appendPlugins = [pgSimplifyInflector, ConnectionFilterPlugin];
    enableQueryBatching = true;
    pgSettings = pgSettings;
    get legacyRelations(): 'omit' {
        return 'omit';
    }
}

class PostGraphQLOptionsDevelopment extends PostGraphQLOptionsBase {
    watchPg = true;
    extendedErrors = ['hint', 'detail', 'errcode'];
    exportGqlSchemaPath = 'schema.graphql';
    graphiql = true;
    enhanceGraphiql = true;
    ownerConnectionString = config.PG_ROOT_URL;
    allowExplain = allowExplain;
    get showErrorStack(): 'json' {
        return 'json';
    }
}

class PostGraphQLOptionsProduction extends PostGraphQLOptionsBase {
    retryOnInitFail = true;
    extendedErrors = ['errcode'];
    graphiql = false;
    disableQueryLog = true;
}

function getOptions(env: string): PostGraphileOptions {
    if (env === 'development') {
        return new PostGraphQLOptionsDevelopment();
    } else {
        return new PostGraphQLOptionsProduction();
    }
}

export default { getOptions };
