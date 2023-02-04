import web from '@core/web';

test("Checando se 'app' inicializador é do tipo 'Express'", async () => {
    const app = await web.createApp();
    expect(typeof app === 'function').toBe(true);
});
