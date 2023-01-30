import logging from '@core/logging';
import pgSimplifyInflector from '@graphile-contrib/pg-simplify-inflector';
import { PostGraphileOptions } from 'postgraphile';
import { IncomingMessage } from 'http';
import ConnectionFilterPlugin from 'postgraphile-plugin-connection-filter';
import config from '@config';
import { DictType } from '@core/customtype';
import jwt from '@core/jwt';

const logger = logging.getLogger('postGraphQLCore');

async function pgSettings(req: IncomingMessage): Promise<DictType> {
    if (req.headers.authorization) {
        const token = req.headers.authorization.replace('Bearer ', '');
        const payload = await jwt.verify(token, config.JWT_SECRET);
        logger.debug(`\ntoken='${token}'\ntoken_payload='${JSON.stringify(payload)}'`);
        return { role: payload.role };
    }
    throw new Error('Token valid is required. "Bearer <token>" syntax is expected.');
}

// async function allowExplain(req: IncomingMessage): Promise<boolean> {
async function allowExplain(): Promise<boolean> {
    // TODO: customise condition!
    return true;
}

class PostGraphQLOptionsBase {
    subscriptions = true;
    dynamicJson = true;
    setofFunctionsContainNulls = false;
    ignoreRBAC = false;
    appendPlugins = [pgSimplifyInflector, ConnectionFilterPlugin];
    enableQueryBatching = true;
    jwtSecret = config.JWT_SECRET;
    jwtVerifyOptions = config.JWT_OPTIONS;
    jwtPgTypeIdentifier = config.JWT_TOKEN_IDENTIFIER;
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

export const getOptions = (env: string): PostGraphileOptions => {
    if (env === 'development') {
        return new PostGraphQLOptionsDevelopment();
    } else {
        return new PostGraphQLOptionsProduction();
    }
};

export default { getOptions };
