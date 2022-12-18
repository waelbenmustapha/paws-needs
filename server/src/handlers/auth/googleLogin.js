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
  if (!inputData || !inputData.token) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        msg: "Login with google require token.",
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
      await connectDatabase();
      // generate password
      const generatedPassword = Math.random().toString(36).slice(-8);
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = bcrypt.hashSync(generatedPassword, salt);
      // Create User Object
      let newUser = new User({
        fullname: payload.name.trim(),
        email: payload.email.trim().toLowerCase(),
        password: hashedPassword,
        provider: "google",
      });
      // Ckeck if user with this email exist
      const user = await User.findOne({
        email: newUser.email,
      });

      if (user) {
        // Login the user
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
        // return logged in user
        return {
          statusCode: 200,
          body: JSON.stringify({
            success: true,
            token: generatedJWT,
            user: user,
          }),
        };
      } else {
        // saving user in database
        const savedUser = await User.create(newUser);
        if (!savedUser) {
          return {
            statusCode: 500,
            body: JSON.stringify({
              success: false,
              msg: "Something went Wrong!",
            }),
          };
        }
        // Generate JWT Token
        const generatedJWT = jwt.sign(
          {
            data: {
              _id: savedUser._id,
              fullname: savedUser.fullname,
              email: savedUser.email,
              role: savedUser.role,
            },
          },
          process.env.TOKEN_SECRET,
          { expiresIn: "24h" }
        );
        // delete password and facebook_user_id from savedUser object
        const userObj = savedUser.toObject();
        delete userObj["facebook_user_id"];
        delete userObj["password"];
        // return logged in user
        return {
          statusCode: 200,
          body: JSON.stringify({
            success: true,
            token: generatedJWT,
            user: userObj,
          }),
        };
      }
    }
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        msg: "google login failed.",
      }),
    };
  }
};
