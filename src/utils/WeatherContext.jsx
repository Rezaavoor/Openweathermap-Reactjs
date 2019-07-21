import React, { useEffect, useState, createContext } from 'react'
import axios from 'axios'
export const WeatherContext = createContext()

const WEATHERAPI = process.env.REACT_APP_WEATHERAPI

export const WeatherProvider = props => {
  const lat = 59.28867
  const lng = 18.03322
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&mode=json&APPID=${WEATHERAPI}`

  useEffect(() => {
    console.log('context useEffect')

    axios
      .get(url)
      .then(json => {
        const data = json.data
        const theWeather = {
          ...weather,
          loading: false,
          city: data.city.name,
          country: data.city.country,
        }
        const forecasts = data.list.slice(0, 9)
        theWeather.forecasts = forecasts
        setWeather(theWeather)
        console.log(forecasts)
        console.log(weather.forecasts)
      })
      .catch(ex => console.log(ex))
  }, [])
  const [weather, setWeather] = useState({
    loading: true,
  })

  return (
    <WeatherContext.Provider value={[weather, setWeather]}>
      {props.children}
    </WeatherContext.Provider>
  )
}
