console.log("Desafio 1");

function findSmallerLarger(listOfProdutos) {
  let smaller = null;
  let larger = null;

  for (let i = 0; i < listOfProdutos.length; i++) {
    const product = listOfProdutos[i];
    if (smaller == null || product.price < smaller.price) {
      smaller = product;
    } else if (larger == null || product.price > larger.price) {
      larger = product;
    }
  }
  return {
    smaller,
    larger,
  };
}

function testFindSmallerLarger() {
  const cart = [
    {
      name: "Liquidificador",
      price: 250.0,
    },
    {
      name: "Geladeira",
      price: 1500.0,
    },
    {
      name: "Jogo de Facas",
      price: 85.0,
    },
  ];
  const response = findSmallerLarger(cart);

  console.log("Mais barato: ", response.smaller.name);
  console.log("Mais caro: ", response.larger.name);

  if (
    response.smaller.name === "Jogo de Facas" &&
    response.larger.name === "Geladeira"
  ) {
    console.log("Passou no teste");
  } else {
    console.log("Erro");
  }
}

testFindSmallerLarger();
