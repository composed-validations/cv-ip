var errorMessage, validationsLibrary, validator;

validationsLibrary = require("composed-validations");
ipValidator        = require("../../lib/validators/ip.js")(validationsLibrary);
errorMessage       = "is not a valid ip address";

describe("IP Validator", function() {
  describe("Passing Invalid Regular Email", function() {
    it("expect to fail passing bad ip", function() {
      expect(function() {
        ipValidator.test('xx');
      }).throw(errorMessage);
    });
  });
});
