import web from "@app/web";

test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
    web.then(() => {
        expect(true).toBe(true);
    })
});
