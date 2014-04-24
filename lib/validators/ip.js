var EXPRESSIONS, hasOptions, isAccepted, isValidIp, util;

EXPRESSIONS = require("../ip_expressions.js");
util        = require("../util.js");

isValidIp  = util.isValidIp;
isAccepted = util.isAccepted;
hasOptions = util.hasOptions;

module.exports = function(cv) {
  return function(options) {
    if (options == null) {
      options = {};
    }

    return {
      test: function(value) {
        var ip, regex;

        for (ip in EXPRESSIONS) {
          regex = EXPRESSIONS[ip];

          if (hasOptions(options)) {
            if (isValidIp(regex, value) && isAccepted(options.accepts, ip)) {
              return value;
            }
          } else {
            if (isValidIp(regex, value)) {
              return value;
            }
          }
        }

        throw new cv.ValidationError("is not a valid ip address", value, this);
      }
    };
  };
};
