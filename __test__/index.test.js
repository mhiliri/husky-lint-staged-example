const {sum} = require("./index")

test("adds 2 + 2 equal to 4", () =>
{
    expect(sum(2,2)).toBe(4);
})