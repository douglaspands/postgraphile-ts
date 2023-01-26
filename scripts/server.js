const http = require('http');
const server = require('../dist/web').default;

server.then((app) => {
    const host = '0.0.0.0';
    const port = 3000;
    http.createServer(app).listen(port, host, () => {
        console.log(`App listening on port ${port}`);
    });
});
