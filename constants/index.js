module.exports = {
  defaultServerResponse: {
    status: 400,
    message: "",
    body: {},
  },
  productMessage: {
    PRODUCT_CRATED: "Product created successfully",
    PRODUCT_FETCHED: "Product fetched successfully",
    PRODUCT_UPDATED: "Product updated successfully",
    PRODUCT_NOT_FOUND: "Product not found",
    PRODUCT_DELETED: "Product deleted successfully",
  },
  userMessage: {
    SIGNUP_SUCESS: "Signup success",
    LOGIN_SUCESS: "Login success",
    DUPLICATE_EMAIL: "User already exists with this email address",
    USER_NOT_FOUND: "User not found",
    INVALID_PASSWORD: "Incorrect password",
  },
  requestValidationMessage: {
    BAD_REQUEST: "Invalid request!",
    TOKEN_MISSING: "Token is missing from the request",
  },
  databasesMessage: {
    INVALIDE_ID: "Invalid ID",
  },
};
