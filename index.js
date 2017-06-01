import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://maps.googleapis.com/'
})

/**
 * add the api key as paramter to the calls
 * @param apiKey
 */
function setAPIKey (apiKey) {
  if (!!apiKey) {
    api.addRequestTransform(request => {
      request.params = {key: apiKey} // google API key
    })
  }
}

/**
 *
 * @param coords: Object containing latitude and longitude coordinates {longitude: 123.1231, latitude: 2334.43243}
 * @returns {Promise} containing address information from google geocoding API
 */
function getAddress (coords) {
  return new Promise((resolve, reject) => {
    let formattedCoords = coords.latitude + ',' + coords.longitude
    try {
      api.addRequestTransform(request => {
        request.params = {latlng: formattedCoords}
      })

      api.get('maps/api/geocode/json').then((response) => resolve(response.data))
    } catch (err) {
      reject(err)
    }
  })
}

let geolocation = {
  setApiKey: setAPIKey,
  getAddress: getAddress
}

export default geolocation
