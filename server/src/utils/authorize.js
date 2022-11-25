var jwt = require("jsonwebtoken");

const jwtAuthorizer = (opts) => {
  const before = async (request) => {
    const { event, context } = request;

    try {
      console.log(event);
      const token = event.headers.authorization.replace("Bearer ", "");
      jwt.verify(token, "tkhalbiza");
    } catch (err) {
      console.log(err);
      return {
        statusCode: 401,
        body: JSON.stringify({ message: err }),
      };
    }
    return console.log("finished this phase");
  };

  const onError = async (request) => {
    if (request.response === undefined) return;
    return console.log("something bad happend");
  };

  return {
    before: before,
    onError: onError,
  };
};

module.exports = jwtAuthorizer;
