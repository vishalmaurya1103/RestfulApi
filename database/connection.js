const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
    console.log("Database connected Successfully");
  } catch (error) {
    console.log("Database connection Failed: ");
    throw new Error(error);
  }
};
