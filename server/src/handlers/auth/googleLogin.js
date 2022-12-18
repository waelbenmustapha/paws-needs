const connectDatabase = require("../../database/db");
const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); // Replace by your client ID

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const inputData = JSON.parse(event.body);

  // check input data
  if (!inputData || !inputData.fullname || !inputData.email) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        msg: "fullname and email are required.",
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
        msg: "Invalid email address",
      }),
    };
  }

  try {
    const ticket = await client.verifyIdToken({
      idToken: inputData.token,
      audience: process.env.GOOGLE_CLIENT_ID, // Replace by your client ID
    });
    const payload = ticket.getPayload();
    // const userid = payload["sub"];

    if (payload) {
      console.log(payload);
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: false,
          msg: "google login success.",
        }),
      };
    }

    // await connectDatabase();
    // // generate password
    // const generatedPassword = Math.random().toString(36).slice(-8);
    // // Hash password
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = bcrypt.hashSync(generatedPassword, salt);
    // // Create User Object
    // let newUser = new User({
    //   fullname: inputData.fullname.trim(),
    //   email: inputData.email.trim().toLowerCase(),
    //   password: hashedPassword,
    //   provider: "google",
    // });

    // // Ckeck if user with this email exist
    // const user = await User.findOne({
    //   email: newUser.email,
    // });

    // if (user) {
    //   // Login the user
    //   // Generate JWT Token
    //   const generatedJWT = jwt.sign(
    //     {
    //       data: {
    //         _id: user._id,
    //         fullname: user.fullname,
    //         email: user.email,
    //         role: user.role,
    //       },
    //     },
    //     process.env.TOKEN_SECRET,
    //     { expiresIn: "24h" }
    //   );
    //   // return logged in user
    //   return {
    //     statusCode: 200,
    //     body: JSON.stringify({
    //       success: true,
    //       token: generatedJWT,
    //       user: user,
    //     }),
    //   };
    // } else {
    //   // saving user in database
    //   const savedUser = await User.create(newUser);
    //   if (!savedUser) {
    //     return {
    //       statusCode: 500,
    //       body: JSON.stringify({
    //         success: false,
    //         msg: "Something went wrong!!",
    //       }),
    //     };
    //   }
    //   // Generate JWT Token
    //   const generatedJWT = jwt.sign(
    //     {
    //       data: {
    //         _id: user._id,
    //         fullname: user.fullname,
    //         email: user.email,
    //         role: user.role,
    //       },
    //     },
    //     process.env.TOKEN_SECRET,
    //     { expiresIn: "24h" }
    //   );
    //   // return logged in user
    //   return {
    //     statusCode: 200,
    //     body: JSON.stringify({
    //       success: true,
    //       token: generatedJWT,
    //       user: user,
    //     }),
    //   };
    // }
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        msg: "google login failed.",
        error: e,
      }),
    };
  }
};
