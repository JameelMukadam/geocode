# geocode [![Coverage Status](https://coveralls.io/repos/github/JameelMukadam/geocode/badge.svg?branch=master)](https://coveralls.io/github/JameelMukadam/geocode?branch=master)
Simple wrapper for the Google geocode API

## Install

`npm install --save geocodeAPI`

## Usage


`import geolocation fom 'geocodeAPI'`

`geolocation.setApiKey('GOOGLE_API_KEY')`

`geolocation.getAddress({longitude: 123.1231, latitude: 2334.43243}).then((address) => {
    console.log(address)
})`

OR

`let address = await geolocation.getAddress({longitude: 123.1231, latitude: 2334.43243})`