const request = require("request-promise");

const API_KEY = "c64697024d59088a7fe34153f3a2940a";
//&APPID=${API_KEY}

class Weather {
  static retrieveByCity(city, callback) {
    request({
      uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`,
      json: true
    })
      .then(res => {
        callback(res);
      })
      .catch(err => {
        console.log(err);
        callback({ error: "Could not reach OpenWeatherMap API." });
      });
  }
}

module.exports = Weather;
