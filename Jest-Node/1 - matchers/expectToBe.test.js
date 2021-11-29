test("dois mais dois é quatro", () => {
  expect(2 + 2).toBe(4);
});

test("atribuição de objeto", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
