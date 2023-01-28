import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import loginService from '@service/authenticate';

const router = Router();

router.post('/v1/login', async (req: Request, res: Response): Promise<void> => {
    try {
        const form = req.body;
        const token = await loginService.login(form.username, form.password);
        res.status(StatusCodes.OK).json(token);
    } catch (_) {
        res.sendStatus(StatusCodes.UNAUTHORIZED);
    }
});

export default { router };
