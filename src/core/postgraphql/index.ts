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
    let res = { role: null };
    if (req.headers.authorization) {
        const token = req.headers.authorization.replace('Bearer ', '');
        const jwt_payload = await jwt.verify(token, config.JWT_SECRET);
        res = Object.assign({}, res, jwt_payload);
        return res;
    } else {
        return {};
    }
}

async function allowExplain(req: IncomingMessage): Promise<boolean> {
    // TODO: customise condition!
    logger.debug(req);
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
