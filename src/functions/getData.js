require('dotenv').config()
import axios from 'axios'

const API_ENDPOINT = `https://api.openweathermap.org`
const WEATHERAPI = process.env.REACT_APP_WEATHERAPI

exports.handler = async (event, context) => {
  const { lat, lng } = event.queryStringParameters
  const url = `${API_ENDPOINT}/data/2.5/forecast?lat=${lat}&lon=${lng}&mode=json&APPID=${WEATHERAPI}`
  console.log(`url${url}url`)
  let data = ''
  data = await axios.get(url).then(json => json.data)

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
