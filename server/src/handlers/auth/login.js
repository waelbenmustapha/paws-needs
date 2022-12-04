const connectDatabase = require("../../database/db");
const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const inputData = JSON.parse(event.body);

  // check input data
  if (!inputData || !inputData.email || !inputData.password) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        msg: "Email and password are required.",
      }),
    };
  }

  // check if email is valid
  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!emailRegexp.test(inputData.email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        msg: "invalid email address",
      }),
    };
  }

  // handle login
  try {
    await connectDatabase();
    const emailLowerCase = inputData.email.trim().toLowerCase();
    const user = await User.findOne({ email: emailLowerCase }).select(
      "+password"
    );
    // if user doesn't exist show error message
    if (!user) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          msg: "Invalid Email or Password.",
        }),
      };
    }
    // evaluate password
    const match = await bcrypt.compare(inputData.password, user.password);

    if (!match) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          msg: "Invalid Email or Password.",
        }),
      };
    }

    // Generate JWT Token
    const generatedJWT = jwt.sign(
      {
        data: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
          role: user.role,
        },
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" }
    );

    // delete password from user object
    const userNoPass = user.toObject();
    delete userNoPass["password"];
    // return success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        token: generatedJWT,
        user: userNoPass,
      }),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
