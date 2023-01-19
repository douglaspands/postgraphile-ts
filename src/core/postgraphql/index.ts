import logging from '@app/core/logging';
import pgSimplifyInflector from '@graphile-contrib/pg-simplify-inflector';
import { PostGraphileOptions } from 'postgraphile';
import { IncomingMessage } from 'http';

const logger = logging.getLogger('postGraphQLCore');
type mixed = string | number | boolean | undefined | null;

async function pgSettings(req: IncomingMessage): Promise<{ [key: string]: mixed }> {
    /* TODO */
    logger.debug(JSON.stringify(req));
    return {};
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
    appendPlugins = [pgSimplifyInflector];
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
