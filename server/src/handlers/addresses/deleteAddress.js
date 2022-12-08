const connectDatabase = require("../../database/db");
const User = require("../../models/user");
const Address = require("../../models/address");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const { id } = event.pathParameters;
    await Address.deleteOne({ _id: id });
    await User.updateOne(
      {
        addresses: { _id: id },
      },
      { $pull: { addresses: id } }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Address Succefully Deleted" }),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
