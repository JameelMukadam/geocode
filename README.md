# geocode [![Coverage Status](https://coveralls.io/repos/github/JameelMukadam/geocode/badge.svg?branch=master)](https://coveralls.io/github/JameelMukadam/geocode?branch=master)
Simple wrapper for the Google geocode API

## Install

`npm install --save geocodeapi`

## Usage


`import geolocation fom 'geocodeapi'`

`geolocation.setApiKey('GOOGLE_API_KEY')`

`geolocation.getAddress({longitude: 123.1231, latitude: 2334.43243}).then((address) => {
    console.log(address)
})`

OR

`let address = await geolocation.getAddress({longitude: 123.1231, latitude: 2334.43243})`