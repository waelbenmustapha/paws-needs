const connectDatabase = require("../../database/db");
const ServiceCategory = require("../../models/serviceCategory");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();

    const page = event.queryStringParameters.page-1 || 0;
    const perpage = event.queryStringParameters.perpage || 5;
    const sort = event.queryStringParameters.sort || "_id";
    const asc = event.queryStringParameters.asc || 1;
    const serviceCategoriesList = await ServiceCategory.find({}, { services: 0 })
      .skip(page * perpage)
      .limit(perpage)
      .sort({ [sort]: asc });

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: serviceCategoriesList,
        page,
        perpage,
        total: await ServiceCategory.count(),
      }),
    };
    
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
