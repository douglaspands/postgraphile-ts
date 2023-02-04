import http from 'http';
import { Express } from 'express';
import web from '@core/web';
import logging from '@core/logging';
import config from '@config';

const logger = logging.getLogger('web');

const app = web.createApp();
app.then((app: Express) => {
    http.createServer(app).listen(config.WEB_PORT, config.WEB_HOST, () => {
        logger.info(`App listening on port ${config.WEB_PORT}`);
    });
}).catch((error) => {
    logger.error(error);
});
