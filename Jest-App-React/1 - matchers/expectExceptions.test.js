function compileAndroidCode() {
  throw new Error("você está usando o JDK errado");
}

//Importante: a função que lança uma exceção precisa ser chamada dentro de uma arrow function, caso contrário a afirmação toThrow falhará.

test("compilando para android segue conforme esperado", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // Você também pode usar a mensagem exata de erro ou uma regexp
  expect(() => compileAndroidCode()).toThrow("você está usando o JDK errado");
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
