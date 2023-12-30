const getOrders = async () => {
  let response = await fetch("http://localhost:3000/orders");
  let resJson = await response.json();
  resJson.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  return resJson;
};

const getProducts = async () => {
  let response = await fetch("http://localhost:3000/products");
  let resJson = await response.json();
  return resJson;
};

const validateProduct = async (prNum) => {
  let dataProduct = await getProducts();

  let product = dataProduct.find((num) => num.id == prNum);

  return product.name;
};

const init = async () => {
  let orders = await getOrders();

  orders.forEach(async (pedido) => {
    let myP = document.createElement("p");
    myP.innerText = `orden ${pedido.id}`;
    for (const id of pedido.products) {
      let myP = document.createElement("p");
      let ropa = await validateProduct(id.productId);
      myP.innerText = `producto  ${ropa}`;
      document.body.appendChild(myP);
    }
    document.body.appendChild(myP);
  });
};

init();
