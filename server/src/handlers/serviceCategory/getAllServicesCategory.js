const connectDatabase = require("../../database/db");
const ServiceCategory = require("../../models/serviceCategory");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();

    const serviceCategoriesList = await ServiceCategory.find(
      {},
      { services: 0 }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(serviceCategoriesList),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
