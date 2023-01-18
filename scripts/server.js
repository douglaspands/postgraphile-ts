const server = require("../dist/index").default;
const port = 3000;

server.then(app => {
    app.listen(port, ()=> {
        console.log(`App listening on port ${port}`)
    })
});
