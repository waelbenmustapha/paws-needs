const connectDatabase = require("../../database/db");
const Address = require("../../models/address");
const User = require("../../models/user");
module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();

    if (event.queryStringParameters) {
      const page = event.queryStringParameters.page - 1 || 0;
      const perpage = event.queryStringParameters.perpage || 5;
      const sort = event.queryStringParameters.sort || "_id";
      const asc = event.queryStringParameters.asc || 1;

      const search = event.queryStringParameters.search;
      const addresses = await Address.find(search ? { $text: { $search: search } } : {})
        .populate({ path: "user" })
        .skip(page * perpage)
        .limit(perpage)
        .sort({ [sort]: asc });

      return {
        statusCode: 200,
        body: JSON.stringify({
          data: addresses,
          page,
          perpage,
          total: await Address.count(search ? { $text: { $search: search } } : {}),
        }),
      };
    } else {
      const addresses = await Address.find({}).populate({ path: "user" });
      return {
        statusCode: 200,
        body: JSON.stringify({
          data: addresses,
          success: true,
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
