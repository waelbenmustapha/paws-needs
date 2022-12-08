const connectDatabase = require("../../database/db");
const Address = require("../../models/address");
const User = require("../../models/user");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const { name, street, area, building, longitude, latitude, userId } =
      JSON.parse(event.body);
    if (
      !name ||
      !street ||
      !area ||
      !building ||
      !longitude ||
      !latitude ||
      !userId
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          msg: "Enter all fields",
        }),
      };
    }
    const user = await User.findById(userId);

    if (!user) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          success: false,
          msg: "User does not exist",
        }),
      };
    }
    const AddressObj = await Address.create({
      name,
      street,
      area,
      building,
      longitude,
      latitude,
      user: userId,
    });

    user.addresses.push(AddressObj);
    user.save();
    return {
      statusCode: 201,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
