const express = require("express");
const app = express();
const port = 8080;

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  let { id } = req.params;
  let numid = parseInt(id);
  let user = users.find((p) => p.id === numid);
  res.send(user);
});

// POST REQUEST
app.post("/products", (req, res) => {
  const product = {
    id: products.length + 1,
    name: req.body.name,
    brand: req.body.brand,
    category: req.body.category,
    price: req.body.price,
    //   sizes: req.body.sizes.([])
    //   colors: req.body.colors
  };
  products.push(product);
  res.json(product);
});

app.delete("/products/:id", (req, res) => {
  id = req.params.id;
  let index = products.findIndex((product) => {
    return product.id === Number.parseInt(id);
  });
  if (index >= 0) {
    let std = products[index];
    products.splice(index, 1);
    res.json(std);
  } else {
    res.status(404);
  }
});

app.get("/", (req, res) => {
  res.send("This is  home page");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
