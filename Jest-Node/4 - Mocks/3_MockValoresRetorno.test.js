describe("Mock Valores de Retorno", () => {
  // const myMock = jest.fn();

  // console.log(myMock());
  // // > undefined

  // myMock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);

  // console.log(myMock(), myMock(), myMock(), myMock());
  // // > 10, 'x', true, true
  test("Testando... ", () => {
    const filterTestFn = jest.fn();

    // Faz o mock retornar`true` para primeira chamada,
    // e `false` e falso para segunda
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    // expect(filterTestFn()).toBe(true);

    // expect(filterTestFn()).toBe(false);

    const result = [11, 12].filter((num) => filterTestFn(num));

    console.log("result", result);
    // > [11]
    console.log(filterTestFn.mock.calls[0][0]); // 11
    console.log(filterTestFn.mock.calls[1][0]); // 12
  });
});
