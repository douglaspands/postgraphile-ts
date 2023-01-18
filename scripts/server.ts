import web from "@app/web";
const port = 3000;

web.then(app => {
    app.listen(port, ()=> {
        console.log(`App listening on port ${port}`)
    })
});
