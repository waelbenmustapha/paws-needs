const connectDatabase = require("../../database/db");
const Adress = require("../../models/address");
const User = require("../../models/user");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const { name, street, area, building, longitude, latitude } = JSON.parse(
      event.body
    );
    const { id } = event.pathParameters;

    if (
      !name ||
      !street ||
      !area ||
      !building ||
      !longitude ||
      !latitude 
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          msg: "Enter all fields",
        }),
      };
    }

    await Adress.findOneAndUpdate(
      { _id: id },
      {name, street, area, building, longitude, latitude  }
    );

    return {
      statusCode: 201,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
