const connectDatabase = require("../../database/db");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const middy = require("@middy/core");
const { verifyJWT } = require("../../middleware/authorize");

const resetPassword = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const token = event.headers.authorization.replace("Bearer ", "");

  try {
    await connectDatabase();

    // get user id from token
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    const user = await User.findOne({ _id: decoded.data._id });

    if (!user) {
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
      body: JSON.stringify(user),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};

module.exports.handler = middy(resetPassword).use(verifyJWT());
