const shoppingList = [
  "fraldas",
  "kleenex",
  "sacos de lixo",
  "papel toalha",
  "leite",
];

test("a lista de compras tem leite nela", () => {
  expect(shoppingList).toContain("leite");
  //Você pode verificar se um array ou iterável contém um item específico usando toContain:
  //expect(new Set(shoppingList)).toContain("leite");
});
