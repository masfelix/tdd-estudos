/**
 * Você também pode agrupar testes junto usando um bloco de describe
 * */

describe("combinando cidades com alimentos", () => {
  // Applies only to tests in this describe block
  // beforeEach(() => {
  //   return initializeFoodDatabase();
  // });

  test("Vienna e vitela", () => {
    expect(isValidCityFoodPair("Vienna", "vitela")).toBe(true);
  });

  test("San Juan e banana da terra", () => {
    expect(isValidCityFoodPair("San Juan", "banana da terra")).toBe(true);
  });
});
