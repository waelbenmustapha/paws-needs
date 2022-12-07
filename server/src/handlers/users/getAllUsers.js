const connectDatabase = require("../../database/db");
const User = require("../../models/user");
const Pet = require("../../models/pet");
const middy = require("@middy/core");
const { verifyJWT, verifyAdmin } = require("../../middleware/authorize");

const getAllUsers = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();

    if (event.queryStringParameters) {
      const page = event.queryStringParameters?.page - 1 || 0;
      const perpage = event.queryStringParameters?.perpage || 5;
      const sort = event.queryStringParameters?.sort || "_id";
      const asc = event.queryStringParameters?.asc || 1;
      const search = event.queryStringParameters.search;

      const users = await User.find(
        search ? { $text: { $search: search } } : {},
        { password: 0 }
      )
        .populate("pets")
        .populate("addresses")
        .skip(page * perpage)
        .limit(perpage)
        .sort({ [sort]: asc });

      return {
        statusCode: 200,
        body: JSON.stringify({
          data: users,
          page,
          perpage,
          total: await User.count(search ? { $text: { $search: search } } : {}),
        }),
      };
    } else {
      const users = await User.find({}, { password: 0 })
        .populate("pets")
        .populate("addresses");

      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          data: users,
        }),
      };
    }
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};

module.exports.handler = middy(getAllUsers).use(verifyJWT()).use(verifyAdmin());
