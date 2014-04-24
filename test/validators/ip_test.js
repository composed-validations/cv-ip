var errorMessage, validationsLibrary, validator;

validationsLibrary = require("composed-validations");
ipValidator        = require("../../lib/validators/ip.js")(validationsLibrary);
errorMessage       = "is not a valid ip address";

describe("IP Validator", function() {
  describe("Passing Invalid IPV4 IP", function() {
    var validator = ipValidator();

    it("expect to fail passing bad ip", function() {
      expect(function() {
        validator.test("xx");
        validator.test("");
        validator.test("::");
        validator.test("---");
      }).throw(errorMessage);
    });
  });

  describe("Passing Valid IPV4 IP", function() {
    var validator = ipValidator();

    it("expect to pass and return the ip", function() {
      expect(validator.test("192.168.0.1")).eq("192.168.0.1");
      expect(validator.test("127.0.0.1")).eq("127.0.0.1");
      expect(validator.test("123.23.34.2")).eq("123.23.34.2");
      expect(validator.test("123.23.34.2")).eq("123.23.34.2");
      expect(validator.test("0.0.0.0")).eq("0.0.0.0");
      expect(validator.test("172.26.168.134")).eq("172.26.168.134");
    });
  });

  describe("Passing Valid IPV6 IP Addresses", function() {
    var validator = ipValidator();

    it("expect to pass and return the ip", function() {
      expect(validator.test("1:2:3:4:5:6:7:8")).eq("1:2:3:4:5:6:7:8");
      expect(validator.test("1::")).eq("1::");
      expect(validator.test("1:2:3:4:5:6:7::")).eq("1:2:3:4:5:6:7::");
      expect(validator.test("1::8")).eq("1::8");
      expect(validator.test("1:2:3:4:5:6::8")).eq("1:2:3:4:5:6::8");
      expect(validator.test("1::7:8")).eq("1::7:8");
      expect(validator.test("1:2:3:4:5::7:8")).eq("1:2:3:4:5::7:8");
      expect(validator.test("1:2:3:4:5::8")).eq("1:2:3:4:5::8");
      expect(validator.test("1::6:7:8")).eq("1::6:7:8");
      expect(validator.test("1:2:3:4::6:7:8")).eq("1:2:3:4::6:7:8");
      expect(validator.test("1:2:3::8")).eq("1:2:3::8");
      expect(validator.test("1::4:5:6:7:8")).eq("1::4:5:6:7:8");
      expect(validator.test("1:2::4:5:6:7:8")).eq("1:2::4:5:6:7:8");
      expect(validator.test("1:2::8")).eq("1:2::8");
      expect(validator.test("1::3:4:5:6:7:8")).eq("1::3:4:5:6:7:8");
      expect(validator.test("::2:3:4:5:6:7:8")).eq("::2:3:4:5:6:7:8");
      expect(validator.test("fe80::7:8%eth0")).eq("fe80::7:8%eth0");
      expect(validator.test("fe80::7:8%1")).eq("fe80::7:8%1");
      expect(validator.test("::255.255.255.255")).eq("::255.255.255.255");
      expect(validator.test("::ffff:255.255.255.255")).eq("::ffff:255.255.255.255");
      expect(validator.test("::ffff:0:255.255.255.255")).eq("::ffff:0:255.255.255.255");
      expect(validator.test("::ffff:0:255.255.255.255")).eq("::ffff:0:255.255.255.255");
      expect(validator.test("2001:db8:3:4::192.0.2.33")).eq("2001:db8:3:4::192.0.2.33");
      expect(validator.test("64:ff9b::192.0.2.33")).eq("64:ff9b::192.0.2.33");
      expect(validator.test("2::10")).eq("2::10");
    });
  });

  describe("Options Parser", function() {
    describe("Accept only IPV4 Addresses", function() {
      var validator = ipValidator({accepts: ["ipv4"]});

      it("expect to fail when pass a ipv6 address", function() {
        expect(validator.test("127.0.0.1")).eq("127.0.0.1");

        expect(function() {
          validator.test("1:2:3:4:5:6:7:8");
        }).throw(errorMessage);
      });
    });

    describe("Accept only IPV6 Addresses", function() {
      var validator = ipValidator({accepts: ["ipv6"]});

      it("expect to fail when pass a ipv6 address", function() {
        expect(validator.test("1:2:3:4:5:6:7:8")).eq("1:2:3:4:5:6:7:8");
        expect(validator.test("::255.255.255.255")).eq("::255.255.255.255");

        expect(function() {
          validator.test("127.0.0.1");
        }).throw(errorMessage);
      });
    });
  });
});
