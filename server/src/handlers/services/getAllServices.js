const connectDatabase = require("../../database/db");
const Service = require("../../models/service");
const ServiceCategory = require("../../models/serviceCategory");
module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();

    if (event.queryStringParameters) {
      const page = event.queryStringParameters?.page - 1 || 0;
      const perpage = event.queryStringParameters?.perpage || 5;
      const sort = event.queryStringParameters?.sort || "_id";
      const asc = event.queryStringParameters?.asc || 1;
      const search = event.queryStringParameters.search;

      const Services = await Service.find(
        search ? { $text: { $search: search } } : {}
      )
        .populate({ path: "serviceCategory", select: "-services" })
        .skip(page * perpage)
        .limit(perpage)
        .sort({ [sort]: asc });

      return {
        statusCode: 200,
        body: JSON.stringify({
          data: Services,
          page,
          perpage,
          total: await Service.count(
            search ? { $text: { $search: search } } : {}
          ),
        }),
      };
    } else {
      const Services = await Service.find({}).populate({
        path: "serviceCategory",
        select: "-services",
      });
      return {
        statusCode: 200,
        body: JSON.stringify({
          data: Services,
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
