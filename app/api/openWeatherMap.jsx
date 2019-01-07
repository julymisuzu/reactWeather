import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5712a007c0165c96d3c1a0e00bd52b68&units=metric';

module.exports = {
  getTemp: (location) => {
    const encodedLocation = encodeURIComponent(location);
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then((response) => {
      console.log('caiu response');
      // Since the API doesn't return an error page, we have to treat that
      if(response.data.cod && response.data.message) {
        console.log('caiu response com error');
        throw new Error(response.data.message);
      } else {
        console.log('caiu response ok');
        return response.data.main.temp;
      }
    }, (response) => {
      console.log('caiu error');
      throw new Error('Unable to fetch weather for that location.');
      // throw new Error(response.data.message);
    })
  }
}