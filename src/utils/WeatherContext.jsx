import React, { useEffect, useState, createContext } from 'react'
import axios from 'axios'
export const WeatherContext = createContext()

export const WeatherProvider = props => {
  const lat = 59.28867
  const lng = 18.03322

  useEffect(() => {
    console.log('context useEffect')
    axios
      .get(`/.netlify/functions/getData?lat=${lat}&lng=${lng}`)
      .then(json => {
        console.log('function')
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
      })
      .catch(ex => console.log(ex))
    // axios
    //   .get(url)
    //   .then(json => {
    //     const data = json.data
    //     console.log('context')
    //     console.log(data)
    //     const theWeather = {
    //       ...weather,
    //       loading: false,
    //       city: data.city.name,
    //       country: data.city.country,
    //     }
    //     const forecasts = data.list.slice(0, 9)
    //     theWeather.forecasts = forecasts
    //     setWeather(theWeather)
    //   })
    //   .catch(ex => console.log(ex))
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
