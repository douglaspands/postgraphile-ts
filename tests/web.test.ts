import web from "@app/web";

test("Checando se 'app' inicializador é do tipo 'Express'", () => {
    web.then(app => {
        expect(typeof app == "function").toBe(true);
    })
});
