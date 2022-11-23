const connectDatabase = require("../../database/db");
const Service = require("../../models/service");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const { name, image } = JSON.parse(event.body);
    const { id } = event.pathParameters;

    await Service.findOneAndUpdate(
      { _id: id },
      { name, image }
    );

    return {
      statusCode: 200,
      body: JSON.stringify("Service Updated Succefully"),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
