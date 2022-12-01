const connectDatabase = require("../../database/db");
const Pet = require("../../models/pet");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    
    const { id } = event.pathParameters;

    const pets = await Pet.find({user:id});

    return {
      statusCode: 200,
      body: JSON.stringify(pets),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
