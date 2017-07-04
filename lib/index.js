'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apisauce = require('apisauce');

// define the api
var api = (0, _apisauce.create)({
  baseURL: 'https://maps.googleapis.com/'
}

/**
 * add the api key as paramter to the calls
 * @param apiKey
 */
);function setAPIKey(apiKey) {
  if (!!apiKey) {
    api.addRequestTransform(function (request) {
      request.params = { key: apiKey // google API key
      };
    });
  }
}

/**
 *
 * @param coords: Object containing latitude and longitude coordinates {longitude: 123.1231, latitude: 2334.43243}
 * @returns {Promise} containing address information from google geocoding API
 */
function getAddress(coords) {
  return new Promise(function (resolve, reject) {
    var formattedCoords = coords.latitude + ',' + coords.longitude;
    try {
      api.addRequestTransform(function (request) {
        request.params = { latlng: formattedCoords };
      });

      api.get('maps/api/geocode/json').then(function (response) {
        return resolve(response.data);
      });
    } catch (err) {
      reject(err);
    }
  });
}

var geolocation = {
  setApiKey: setAPIKey,
  getAddress: getAddress
};

exports.default = geolocation;