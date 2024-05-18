const mongoose = require("mongoose");
const constants = require("../constants");

module.exports.formateMongoData = (data) => {
  if (Array.isArray(data)) {
    let newDataList = [];
    for (value of data) {
      value.toObject();
      newDataList.push(value.toObject());
    }
    return newDataList;
  }
  return data.toObject();
};

module.exports.checkObjectId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error(constants.databasesMessage.INVALIDE_ID);
  }
};
