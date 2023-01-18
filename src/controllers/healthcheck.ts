import { Router, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import logging from '@app/core/logging';

const logger = logging.getLogger('healthcheckController');
const router = Router();

router.get('/v1/ping', async (_, res: Response): Promise<void> => {
    res.status(StatusCodes.OK).send('pong');
    logger.info('Ping called!');
});

export default router;
