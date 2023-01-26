import http from 'http';
import web from '@app/web';
import { Express } from 'express';

web.then((app: Express) => {
    const host = '0.0.0.0';
    const port = 3000;
    http.createServer(app).listen(port, host, () => {
        console.log(`App listening on port ${port}`);
    });
});
