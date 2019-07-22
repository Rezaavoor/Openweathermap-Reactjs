import axios from 'axios'

const WEATHERAPI = process.env.REACT_APP_WEATHERAPI
const API_ENDPOINT = `https://api.openweathermap.org/`

exports.handler = async (event, context) => {
  const { lat, lng } = event.queryStringParameters
  const url = `${API_ENDPOINT}data/2.5/forecast?lat=${lat}&lon=${lng}&mode=json&APPID=${WEATHERAPI}`
  return axios
    .get(url)
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data,
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }))
}
