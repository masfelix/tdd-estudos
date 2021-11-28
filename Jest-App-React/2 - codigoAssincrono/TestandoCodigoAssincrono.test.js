/**
 * Tendo uma função fetchData(callback) que busca alguns dados e chama callback(data) quando está completa. Você deseja testar que este dado retornado seja apenas a string 'manteiga de amendoim'.
 */

test("o dado é manteiga de amendoim", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("manteiga de amendoim");
      done();
    } catch (error) {
      done(error);
    }
  }
  //fetchData(callback);
});
//Se done() nunca for chamado, o teste irá falhar (com erro de timeout)

/**
 * Se o código usa "promises", há uma maneira mais simples para lidar com testes assíncronos. Retorne uma promise do seu teste, e o Jest vai esperar essa promise ser resolvida. Se a promessa for rejeitada, o teste automaticamente irá falhar.
 */
test("o dado é manteiga de amendoim", () => {
  //Certifique-se de retornar a promise, se você omitir esta instrução return, seu teste será concluído antes que a promessa retornada por fetchData resolva e then() tenha a chance de executar a callback.
  return fetchData().then((data) => {
    expect(data).toBe("manteiga de amendoim");
  });
});
//Se você espera que a promessa seja rejeitada, use o método .catch
test("o carregamento dos dados falha com erro", () => {
  expect.assertions(1);
  return fetchData().catch((e) => expect(e).toMatch("error"));
});

/** Também podemos usar o "matcher" .resolves, e Jest irá aguardar a promessa resolver. Se a promessa for rejeitada, o teste automaticamente irá falhar. */
test("o dado é manteiga de amendoim", () => {
  return expect(fetchData()).resolves.toBe("manteiga de amendoim");
});

test("o carregamento dos dados falha com erro", () => {
  return expect(fetchData()).rejects.toMatch("error");
});

//Async/Await [O que vamos usar com quase toda certeza rsrrs]
test("o dado é manteiga de amendoim", async () => {
  const data = await fetchData();
  expect(data).toBe("manteiga de amendoim");
});

test("o carregamento dos dados falha com erro", async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

//ou ainda... combinar async resolve, async reject.

test("o dado é manteiga de amendoim", async () => {
  await expect(fetchData()).resolves.toBe("manteiga de amendoim");
});

test("o carregamento dos dados falha com erro", async () => {
  await expect(fetchData()).rejects.toMatch("error");
});
