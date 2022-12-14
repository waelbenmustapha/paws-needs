const connectDatabase = require("../../database/db");
const { verifyJWT } = require("../../middleware/authorize");
const Pet = require("../../models/pet");
const middy = require("@middy/core");

const userPets = async (event, context) => {
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

module.exports.handler = middy(userPets).use(verifyJWT());
