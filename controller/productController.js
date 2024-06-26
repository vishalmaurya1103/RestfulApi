const productService = require("../service/productService");
const constants = require("../constants");

module.exports.createProduct = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await productService.createProduct(req.body);
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_CRATED;
    response.body = responseFromService;
  } catch (error) {
    console.log("Somthing went wrong : Controller cretaeProduct", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

module.exports.getAllProduct = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await productService.getAllProduct(req.query);
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_FETCHED;
    response.body = responseFromService;
  } catch (error) {
    console.log("Somthing went wrong : Controller getAllProduct", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

module.exports.getProductById = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await productService.getProductById(req.params);
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_FETCHED;
    response.body = responseFromService;
  } catch (error) {
    console.log("Somthing went wrong : Controller getProductById", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

module.exports.updateProduct = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await productService.updateProduct({
      id: req.params.id,
      updateInfo: req.body,
    });
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_UPDATED;
    response.body = responseFromService;
  } catch (error) {
    console.log("Somthing went wrong : Controller updateProduct", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

module.exports.deleteProduct = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await productService.deleteProduct(req.params);
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_DELETED;
    response.body = responseFromService;
  } catch (error) {
    console.log("Somthing went wrong : Controller deleteProduct", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};