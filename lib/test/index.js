'use strict';

var _chai = require('chai');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('geolocationTest', function () {
  it('should get address properly', function () {
    var coords = { latitude: -26.1130260, longitude: 28.0206140 };
    return _index2.default.getAddress(coords).then(function (address) {
      (0, _chai.expect)(address.results[0].formatted_address).to.equal('410 Jan Smuts Ave, Craighall Park, Randburg, 2196, South Africa');
    });
  });
});