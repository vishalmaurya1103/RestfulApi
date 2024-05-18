const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const DbConnection = require("./database/connection");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

dotEnv.config();
const app = express();

//Datbase connectivity
DbConnection();

//Request payload for middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/product", require("./routes/productRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));

//api documantion
if (process.env.NODE_ENV != "production") {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});

app.get("/", (req, res, next) => {
  res.send("Hello, world!");
});

app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {},
  });
});