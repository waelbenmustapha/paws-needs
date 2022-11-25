const connectDatabase = require("../../database/db");
const Service = require("../../models/service");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();

    const Services = await Service.find({});

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
