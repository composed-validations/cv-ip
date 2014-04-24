module.exports = {
  isValidIp: function (regex, value) {
    return !!regex.exec(value);
  },

  isAccepted: function (arr, value) {
    return (arr.indexOf(value) > -1);
  },

  hasOptions: function (options) {
    return (options.accepts && options.accepts.length);
  }
};
