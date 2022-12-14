const connectDatabase = require("../../database/db");
const Pet = require("../../models/pet");
const User = require("../../models/user");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const { id } = event.pathParameters;

    const {
      name,
      type,
      breed,
      image,
      gender,
      weight,
      moredetails,
      description,
    } = JSON.parse(event.body);
    if (!name || !type || !breed || !gender || !weight) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          msg: "Enter all required fields",
        }),
      };
    }

    await Pet.findOneAndUpdate(
      { _id: id },
      { name, type, breed, image, gender, weight, moredetails, description }
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
