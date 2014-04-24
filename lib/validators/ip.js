EXPRESSION = require('../email_expression.js');

module.exports = function(cv) {
  return {
    test: function(value) {
      if (value == "x") {
        return value;
      } else {
        throw new cv.ValidationError("is not a valid email", value, this);
      }
    }
  };
};