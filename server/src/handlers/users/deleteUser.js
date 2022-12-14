const connectDatabase = require("../../database/db");
const User = require("../../models/user");
const middy = require("@middy/core");
const { verifyJWT, verifyAdmin } = require("../../middleware/authorize");

const deleteUser = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const { id } = event.pathParameters;

  try {
    await connectDatabase();

    const savedData = await User.findByIdAndDelete({ _id: id });
    if (!savedData) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          success: false,
          msg: "user not found",
        }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        msg: "user deleted successfuly",
      }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};

module.exports.handler = middy(deleteUser).use(verifyJWT()).use(verifyAdmin());
