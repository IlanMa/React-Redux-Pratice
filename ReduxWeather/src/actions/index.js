import axios from 'axios'

const API_KEY = '35bc680a09a825c23cdd44e0f62e43c9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`
	const request = axios.get(url);


	return {
		type: FETCH_WEATHER,
		payload: request // request is a promise, but in the reducer file, it becomes data due to 'react-promise' middleware
	};
}