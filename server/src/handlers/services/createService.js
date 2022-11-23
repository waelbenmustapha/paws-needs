const connectDatabase = require("../../database/db");
const Service = require("../../models/service");
const ServiceCategory = require("../../models/serviceCategory");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const { name, image, serviceCategoryId } = JSON.parse(event.body);

    const category = await ServiceCategory.findById(serviceCategoryId);

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
      body: JSON.stringify({ error: error.message }),
    };
  }
};
