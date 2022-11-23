const connectDatabase = require("../../database/db");
const ServiceCategory = require("../../models/serviceCategory");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const { name, image } = JSON.parse(event.body);

    const ServiceCategoryObj = await ServiceCategory.create({ name, image });

    return {
      statusCode: 201,
      body: JSON.stringify(ServiceCategoryObj),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
