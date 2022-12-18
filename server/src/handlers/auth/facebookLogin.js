const connectDatabase = require("../../database/db");
const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { default: axios } = require("axios");

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
    // get the App Token
    const appTokenResponse = await axios.get(
      `https://graph.facebook.com/oauth/access_token?client_id=${process.env.FACEBOOK_CLIENT_ID}&client_secret=${process.env.FACEBOOK_CLIENT_SECRET}&grant_type=client_credentials`
    );

    if (appTokenResponse.status == 200) {
      const appAccessToken = appTokenResponse.data.access_token;
      // verify token
      const debugedTokenResponse = await axios.get(
        `https://graph.facebook.com/debug_token?input_token=${inputData.token}&access_token=${appAccessToken}`
      );

      // if verifying token request SUCCESSED statusCode = 200
      if (debugedTokenResponse.status == 200) {
        // handling unauthorized token error ( Expired Token )
        if (debugedTokenResponse.data.data.is_valid == false) {
          return {
            statusCode: 401,
            body: JSON.stringify({
              success: false,
              msg: debugedTokenResponse.data.data.error.message,
            }),
          };
        }

        // valid Token
        if (debugedTokenResponse.data.data.is_valid == true) {
          await connectDatabase();
          // generate password
          const generatedPassword = Math.random().toString(36).slice(-8);
          // Hash password
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = bcrypt.hashSync(generatedPassword, salt);
          // Create User Object
          let newUser = new User({
            fullname: inputData.fullname.trim(),
            email: inputData.email.trim().toLowerCase(),
            password: hashedPassword,
            provider: "facebook",
            facebook_user_id: debugedTokenResponse.data.data.user_id,
          });

          // Ckeck if user with this facebook id exist
          const user = await User.findOne({
            facebook_user_id: newUser.facebook_user_id,
          });

          // user exist in database
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
            // Ckeck if user with this email exist
            const userEmail = await User.findOne({
              email: newUser.email,
            });
            if (userEmail) {
              return {
                statusCode: 400,
                body: JSON.stringify({
                  success: false,
                  msg: "Account with this email already exist.",
                }),
              };
            }
            // saving user in database
            const savedUser = await User.create(newUser);
            if (!savedUser) {
              return {
                statusCode: 500,
                body: JSON.stringify({
                  success: false,
                  msg: "Something went wrong!!",
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
            // return logged in user
            return {
              statusCode: 200,
              body: JSON.stringify({
                success: true,
                token: generatedJWT,
                user: user,
              }),
            };
          }
        }
      }
    }
  } catch (e) {
    if (e.response && e.response.status == 400) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          msg: e.response.data.error.message,
        }),
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          msg: "Something Went Wrong",
          error: e,
        }),
      };
    }
  }
};
