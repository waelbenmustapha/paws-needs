const connectDatabase = require("../../database/db");
const User = require("../../models/user");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const { id } = event.pathParameters;
  const obj = JSON.parse(event.body);

  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!obj || !obj.fullname || !obj.email) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        msg: "Enter all fields",
      }),
    };
  }

  if (!emailRegexp.test(obj.email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        msg: "Enter correct email address",
      }),
    };
  }

  let newUser = {
    fullname: obj.fullname,
    email: obj.email,
  };

  try {
    await connectDatabase();

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
    console.log(error);
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
