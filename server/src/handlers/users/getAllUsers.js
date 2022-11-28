const connectDatabase = require("../../database/db");
const User = require("../../models/user");
const middy = require("@middy/core");
const { verifyJWT, verifyAdmin } = require("../../middleware/authorize");

const getAllUsers = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();

    const page = event.queryStringParameters.page-1 || 0;
    const perpage = event.queryStringParameters.perpage || 5;
    const sort = event.queryStringParameters.sort || "_id";
    const asc = event.queryStringParameters.asc || 1;
    console.log(page)
    console.log(perpage)
    const users = await User.find({},{isAdmin:0,password:0})
      .skip(page * perpage)
      .limit(perpage)
      .sort({ [sort]: asc });

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: users,
        page,
        perpage,
        total: await User.count(),
      }),
    };
  
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};

module.exports.handler = middy(getAllUsers).use(verifyJWT()).use(verifyAdmin());
