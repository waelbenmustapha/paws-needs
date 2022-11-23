const connectDatabase = require("../../database/db");
const ServiceCategory = require("../../models/serviceCategory");
const Service = require("../../models/service");
module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();

    const serviceCategories = await ServiceCategory.find({});
    /*
    for (i = 0; i < serviceCategories.length; i++) {
      const servicescount = await Service.find({
        serviceCategory: serviceCategories[i]._id,
      }).count();
      serviceCategories[i] = {
        ...serviceCategories[i].toObject(),
        count: servicescount,
      };
    }
*/
    return {
      statusCode: 200,
      body: JSON.stringify(serviceCategories),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
