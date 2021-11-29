function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockCallback = jest.fn((x) => 42 + x);

forEach([0, 1], mockCallback);

describe("Testando mocks", () => {
  test("Espero ter 2 items no mock", () => {
    expect(mockCallback.mock.calls.length).toBe(2);
  });
  test("O primeiro argumento do mock é 0", () => {
    expect(mockCallback.mock.calls[0][0]).toBe(0);
  });
  test("O segundo argumento do mock é 1", () => {
    expect(mockCallback.mock.calls[1][0]).toBe(1);
  });
  test("O valor de retorno da primeira chamada é 42", () => {
    expect(mockCallback.mock.results[0].value).toBe(42);
  });
});
