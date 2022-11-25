const connectDatabase = require("../../database/db");
const User = require("../../models/user");

const middy = require('@middy/core')

const jwtAuthorizer = require("../../utils/authorize")
const MyFunctionLogic = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();

    const users = await User.find();

    return {
      statusCode: 200,
      body: JSON.stringify(users),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};

module.exports.handler = middy(MyFunctionLogic).use(jwtAuthorizer())


  