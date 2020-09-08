const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=7932049fdf0041f201290839efbad0fe&query=' + latitude + ',' + longitude;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to network services :(', undefined)
    } else if (body.error) {
      callback('Please provide a valid set of coordinates', undefined)
    } else {
      callback(undefined, `${body.current.weather_descriptions}. The current temperature is ${body.current.temperature}°C, visibility is ${body.current.visibility}, with a humidity of ${body.current.humidity}.`);
    }
  });
}

module.exports = forecast