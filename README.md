IP Validator Plugin for Composed Validations Library
==============================

[![Build Status](https://drone.io/github.com/composed-validations/cv-ip/status.png)](https://drone.io/github.com/composed-validations/cv-ip/latest)

The Official IP Validator. Supporting IPv4 address, IPv6 address, IPv4-mapped IPv6 address

# Installation
```
npm install cv-ip
```

# How to Use
```javascript
var validations = require('composed-validations');
var ipValidator = require('cv-ip')(validations);

ipValidator.test("127.0.0.1"); // will return 127.0.0.1
ipValidator.test("-----.---.%.2"); // false (will throw an error with the error message: is not a valid ip address)

```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://djalmaaraujo.mit-license.org)
