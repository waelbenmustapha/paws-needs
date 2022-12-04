const connectDatabase = require("../../database/db");
const Pet = require("../../models/pet");
const User = require("../../models/user");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const { name, type, breed, userId,image } = JSON.parse(event.body);
    if (!name || !type || !breed || !userId || !image) {
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
    const PetObj = await Pet.create({
      name,
      type,
      breed,
      image,
      user: userId,
    });

    user.pets.push(PetObj);
    user.save();
    return {
      statusCode: 201,
      body: JSON.stringify(PetObj),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
