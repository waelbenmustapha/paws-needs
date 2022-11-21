const connectDatabase = require("../database/db");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const { name, email, password } = JSON.parse(event.body);
    let userObj = {
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    };
    userObj = await User.create(userObj);

    return {
      statusCode: 201,
      body: JSON.stringify(userObj),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
