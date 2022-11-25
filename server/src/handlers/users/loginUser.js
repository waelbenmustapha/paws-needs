var jwt = require("jsonwebtoken");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {

    

   const generatedJWT = jwt.sign(
      {
        data: { name: "wael", email: "wael@wael.fr" },
      },
      "tkhalbiza",
      { expiresIn: "1h" }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(generatedJWT),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
