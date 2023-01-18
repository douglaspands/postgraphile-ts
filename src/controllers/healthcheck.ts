import { Router, Response } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get('/v1/ping', async (_, res: Response): Promise<void> => {
    res.status(StatusCodes.OK).send("pong");
});

export default router;