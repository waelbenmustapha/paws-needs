const connectDatabase = require("../../database/db");
const User = require("../../models/user");
const Pet = require("../../models/pet");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const { id } = event.pathParameters;
    await Pet.deleteOne({ _id: id });
    await User.updateOne(
      {
        pets: { _id: id },
      },
      { $pull: { pets: id } }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Pet Succefully Deleted" }),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
