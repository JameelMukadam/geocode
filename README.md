# geocodeAPI [![Coverage Status](https://coveralls.io/repos/github/JameelMukadam/geocode/badge.svg?branch=master)](https://coveralls.io/github/JameelMukadam/geocode?branch=master) [![Build Status](https://travis-ci.org/JameelMukadam/geocode.svg?branch=master)](https://travis-ci.org/JameelMukadam/geocode) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![npm version](https://badge.fury.io/js/geocodeapi.svg)](https://badge.fury.io/js/geocodeapi)

Simple wrapper for the Google geocode API

## WARNING: This project is no longer maintained. It may or may not work. Feel free to fork it if need be.

## Install

`npm install --save geocodeapi`

## Usage


`import geolocation from 'geocodeapi'`

`geolocation.setApiKey('GOOGLE_API_KEY')`

`geolocation.getAddress({longitude: 123.1231, latitude: 2334.43243}).then((address) => {
    console.log(address)
})`

OR

`let address = await geolocation.getAddress({longitude: 123.1231, latitude: 2334.43243})`
