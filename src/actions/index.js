import axios from 'axios';

const API_KEY = '692320b4a7f3591eaf7ede08f023d550';
//the $ is ES6 syntax. It cleans up the code a little bit but is optional. You could just enter '+ API_KEY' too
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${ API_KEY }`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  //the 'request' here is a promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
