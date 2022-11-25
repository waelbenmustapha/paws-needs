const connectDatabase = require("../../database/db");
const Service = require("../../models/service");
const ServiceCategory = require("../../models/serviceCategory");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const { name, image, serviceCategoryId } = JSON.parse(event.body);
    if (!name || !image || !serviceCategoryId) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          msg: "Enter all fields",
        }),
      };
    }
    const category = await ServiceCategory.findById(serviceCategoryId);

    if (!category) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          success: false,
          msg: "Category does not exist",
        }),
      };
    }
    const ServiceObj = await Service.create({
      name,
      image,
      serviceCategory: serviceCategoryId,
    });

    category.services.push(ServiceObj);
    category.save();
    return {
      statusCode: 201,
      body: JSON.stringify(ServiceObj),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
