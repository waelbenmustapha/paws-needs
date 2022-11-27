const connectDatabase = require("../../database/db");
const User = require("../../models/user");
const middy = require("@middy/core");
const { verifyJWT, verifyAdmin } = require("../../middleware/authorize");

const updateUserById = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const { id } = event.pathParameters;
  const inputData = JSON.parse(event.body);

  // check input data
  if (!inputData || !inputData.fullname || !inputData.email) {
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
    address: {
      name: null,
      street: null,
      city: null,
      longitude: null,
      latitude: null,
    },
    role: "user",
    status: "active",
  };

  try {
    await connectDatabase();

    // check if there is a user exist with the same email entred
    const user = await User.findOne({
      $and: [{ _id: { $ne: id } }, { email: newUser.email }],
    });

    if (user) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          msg: "email already been used",
        }),
      };
    }

    // ckeck if user user exist with this id then save data
    const savedData = await User.findByIdAndUpdate({ _id: id }, newUser);
    if (!savedData) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          success: false,
          msg: "user not found",
        }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        msg: "user updated successfuly",
      }),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};

module.exports.handler = middy(updateUserById)
  .use(verifyJWT())
  .use(verifyAdmin());
