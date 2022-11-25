const connectDatabase = require("../../database/db");
const Service = require("../../models/service");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const { id } = event.pathParameters;

    const Services = await Service.find({serviceCategory:id});

    return {
      statusCode: 200,
      body: JSON.stringify(Services),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
