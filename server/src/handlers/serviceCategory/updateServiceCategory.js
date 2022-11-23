const connectDatabase = require("../../database/db");
const ServiceCategory = require("../../models/serviceCategory");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const { name, image } = JSON.parse(event.body);
    const { id } = event.pathParameters;

    await ServiceCategory.findOneAndUpdate(
      { _id: id },
      { name, image }
    );

    return {
      statusCode: 200,
      body: JSON.stringify("Updated Succefully"),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
