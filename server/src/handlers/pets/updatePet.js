const connectDatabase = require("../../database/db");
const Pet = require("../../models/pet");
const User = require("../../models/user");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try { 

    await connectDatabase();
    const { name, type, breed } = JSON.parse(event.body);
    const { id } = event.pathParameters;

    if (!name || !type || !breed) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          msg: "Enter all fields",
        }),
      };
    }

    const PetObj = await Pet.create({
      name,
      type,
      breed,
    });
    await Pet.findOneAndUpdate({ _id: id }, { name, type, breed });

    
    return {
      statusCode: 201,
      body: JSON.stringify("Pet Updated Succefully"),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
