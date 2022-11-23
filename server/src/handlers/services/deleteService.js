const connectDatabase = require("../../database/db");
const ServiceCategory = require("../../models/serviceCategory");
const Service = require("../../models/service");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const { id } = event.pathParameters;
    await Service.deleteOne({ _id: id });
    await ServiceCategory.updateOne(
      {
        services: { _id: id },
      },
      { $pull: { services: id } }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Service Succefully Deleted" }),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
