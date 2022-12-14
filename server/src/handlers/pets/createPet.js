const connectDatabase = require("../../database/db");
const Pet = require("../../models/pet");
const User = require("../../models/user");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const {
      name,
      type,
      breed,
      userId,
      image,
      gender,
      weight,
      moredetails,
      description,
    } = JSON.parse(event.body);
    console.log({
      name,
      type,
      breed,
      userId,
      image,
      gender,
      weight,
      moredetails,
      description,
    });
    if (!name || !type || !breed || !userId || !gender || !weight) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          msg: "Enter all required fields",
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
      gender,
      weight,
      moredetails,
      description,
      user: userId,
    });

    user.pets.push(PetObj);
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
