EXPRESSION = require('../ip_expressions.js');

module.exports = function(cv) {
  return {
    test: function(value) {
      if (value == "x") {
        return value;
      } else {
        throw new cv.ValidationError("is not a valid ip address", value, this);
      }
    }
  };
};
