import axios from 'axios'

const WEATHERAPI = '43fd74530bcdf49702a7554ff27e5972'

exports.handler = (event, context, callback) => {
  const lat = event.queryStringParameters.lat || 59.28867
  const lng = event.queryStringParameters.lng || 18.03322
  const url = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&mode=xml&APPID=${WEATHERAPI}`

  axios
    .get(url)
    .then(json => {
      // return {
      //   statusCode: 200,
      //   body: JSON.stringify(json.data),
      // }
      console.log(JSON.stringify(json.data))
    })
    .catch(ex => callback(ex))
}
