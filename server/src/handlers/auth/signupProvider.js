const connectDatabase = require("../../database/db");
const User = require("../../models/user");
const bcrypt = require("bcryptjs");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const obj = JSON.parse(event.body);

  // check input data
  if (!obj || !obj.fullname || !obj.email || !obj.password) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        msg: "Enter all fields",
      }),
    };
  }

  // check email is valid or not
  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegexp.test(obj.email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        msg: "invalid email address",
      }),
    };
  }

  // check password length
  if (obj.password.length < 8) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        msg: "password should be 8 characters or more",
      }),
    };
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hashSync(obj.password, salt);

  // create new user object with new data
  let newUser = new User({
    fullname: obj.fullname,
    email: obj.email,
    password: hashedPassword,
    role: "provider",
    phoneNumber: null,
  });

  try {
    await connectDatabase();

    const user = await User.findOne({ email: newUser.email, role: "provider" });

    if (user) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          msg: "Email already exist",
        }),
      };
    }

    const savedData = await User.create(newUser);
    if (!savedData) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          msg: "Something went wrong",
        }),
      };
    }
    return {
      statusCode: 201,
      body: JSON.stringify({
        success: true,
        msg: "provider account created successfuly",
      }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
