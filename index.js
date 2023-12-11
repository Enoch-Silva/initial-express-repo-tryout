let express = require("express");
let app = express();

app.get("/", function (req, res) {
  res.send("Primeira rota com o Express!");
});

app.get("/teste", function (req, res) {
  res.send("Testando rotas com o Express!");
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("A Aplicação está funcionando na porta 3000");
});
