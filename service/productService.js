const Product = require("../database/models/productModel");
const { formateMongoData, checkObjectId } = require("../helper/dbHelper");
const constants = require("../constants");

module.exports.createProduct = async (serviceData) => {
  try {
    let product = new Product({ ...serviceData });
    let result = await product.save();
    return formateMongoData(result);
  } catch (error) {
    console.log("Something went wrong: Service: createProduct", error);
    throw new Error(error);
  }
};

module.exports.getAllProduct = async ({ skip = 0, limit = 0 }) => {
  try {
    let products = await Product.find({})
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    return formateMongoData(products);
  } catch (error) {
    console.log("Something went wrong: Service: getAllProduct ", error);
    throw new Error(error);
  }
};

module.exports.getProductById = async ({ id }) => {
  try {
    checkObjectId(id);
    let product = await Product.findById(id);
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formateMongoData(product);
  } catch (error) {
    console.log("Something went wrong: Service: getProductById ", error);
    throw new Error(error);
  }
};

module.exports.updateProduct = async ({ id, updateInfo }) => {
  try {
    checkObjectId(id);
    let product = await Product.findOneAndUpdate({ _id: id }, updateInfo, {
      new: true,
    });
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formateMongoData(product);
  } catch (error) {
    console.log("Something went wrong: Service: updateProduct ", error);
    throw new Error(error);
  }
};

module.exports.deleteProduct = async ({ id }) => {
  try {
    checkObjectId(id);
    let product = await Product.findByIdAndDelete(id);
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formateMongoData(product);
  } catch (error) {
    console.log("Something went wrong: Service: deleteProduct", error);
    throw new Error(error);
  }
};
