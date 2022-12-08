const connectDatabase = require("../../database/db");
const Address = require("../../models/address");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    
    const { id } = event.pathParameters;

    const addresses = await Address.find({user:id});

    return {
      statusCode: 200,
      body: JSON.stringify(addresses),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
