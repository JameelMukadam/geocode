import { expect } from 'chai'

import geolocation from '../index'

describe('geolocationTest', () => {
  it('should get address properly', () => {
    const coords = {latitude: -26.1130260, longitude: 28.0206140}
    return geolocation.getAddress(coords).then((address) => {
      expect(address.results[0].formatted_address).to.equal('410 Jan Smuts Ave, Craighall Park, Randburg, 2196, South Africa')
    })
  })
})
