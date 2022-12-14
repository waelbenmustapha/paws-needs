const connectDatabase = require("../../database/db");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const middy = require("@middy/core");
const { verifyJWT } = require("../../middleware/authorize");

const updateCurrentUser = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const token = event.headers.authorization.replace("Bearer ", "");
  const inputData = JSON.parse(event.body);

  // check input data
  if (
    !inputData ||
    !inputData.fullname ||
    !inputData.email ||
    !inputData.phoneNumber
  ) {
    console.log("input error");
    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        msg: "Enter all fields",
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
        msg: "Enter correct email address",
      }),
    };
  }

  // create a new user object
  let newUser = {
    fullname: inputData.fullname,
    email: inputData.email,
    phoneNumber: null,
    profile_pic:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png",
  };

  try {
    await connectDatabase();
    // get user id from token
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    // check if there is a user exist with this id
    const foundUser = await User.findOne({ _id: decoded.data._id });
    if (!foundUser) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          success: false,
          msg: "User not found",
        }),
      };
    }
    // check if there is a user exist with the same email entred
    const user = await User.findOne({
      $and: [{ _id: { $ne: decoded.data._id } }, { email: newUser.email }],
    });

    if (user) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          msg: "Email already been used",
        }),
      };
    }

    // update user data
    const savedData = await User.findByIdAndUpdate(decoded.data._id, newUser);
    if (savedData) {
      // get the updated user
      const userUpdated = await User.findOne(savedData._id);
      if (userUpdated) {
        return {
          statusCode: 200,
          body: JSON.stringify({
            success: true,
            msg: "Account updated successfuly",
            user: userUpdated,
          }),
        };
      }
    }
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};

module.exports.handler = middy(updateCurrentUser).use(verifyJWT());
