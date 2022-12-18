var jwt = require("jsonwebtoken");

//********************************************** */
//********************************************** */
// verify token is valid or not
//********************************************** */
//********************************************** */
const verifyJWT = (opts) => {
  // on Before function
  const before = async (request) => {
    const { event, context } = request;

    if (event.headers.authorization == undefined) {
      return {
        statusCode: 401,
        body: JSON.stringify({
          success: false,
          msg: "Unauthorized",
        }),
      };
    }
    const token = event.headers.authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.TOKEN_SECRET);
  };

  // on Error function
  const onError = async (request) => {
    return {
      statusCode: 401,
      body: JSON.stringify({
        success: false,
        msg: request.error,
      }),
    };
  };

  return {
    before: before,
    onError: onError,
  };
};

//********************************************** */
//********************************************** */
// Verify Admin Permission
//********************************************** */
//********************************************** */
const verifyAdmin = (opts) => {
  // on Before function
  const before = async (request) => {
    const { event, context } = request;

    if (event.headers.authorization == undefined) {
      return {
        statusCode: 403,
        body: JSON.stringify({
          success: false,
          msg: "Unauthorized",
        }),
      };
    }
    const token = event.headers.authorization.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    if (decoded.data.role != "admin") {
      return {
        statusCode: 403,
        body: JSON.stringify({
          success: false,
          msg: "Unauthorized only admin can access this",
        }),
      };
    }
  };

  // on Error function
  const onError = async (request) => {
    return {
      statusCode: 403,
      body: JSON.stringify({
        success: false,
        msg: request.error,
      }),
    };
  };

  return {
    before: before,
    onError: onError,
  };
};

//********************************************** */
//********************************************** */
// Verify Provider Or Admin Permission
//********************************************** */
//********************************************** */
const verifyProviderOrAdmin = (opts) => {
  // on Before function
  const before = async (request) => {
    const { event, context } = request;

    if (event.headers.authorization == undefined) {
      return {
        statusCode: 403,
        body: JSON.stringify({
          success: false,
          msg: "Unauthorized",
        }),
      };
    }
    const token = event.headers.authorization.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    if (decoded.data.role != "provider" || decoded.data.role != "admin") {
      return {
        statusCode: 403,
        body: JSON.stringify({
          success: false,
          msg: "Unauthorized only provider can access this",
        }),
      };
    }
  };

  // on Error function
  const onError = async (request) => {
    return {
      statusCode: 403,
      body: JSON.stringify({
        success: false,
        msg: request.error,
      }),
    };
  };

  return {
    before: before,
    onError: onError,
  };
};

module.exports = { verifyJWT, verifyAdmin, verifyProviderOrAdmin };
