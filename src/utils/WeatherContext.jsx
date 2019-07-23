import React, { useEffect, useState, createContext } from 'react'
import axios from 'axios'
export const WeatherContext = createContext()

export const WeatherProvider = props => {
  const getData = (lat, lng) => {
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
  }

  const [weather, setWeather] = useState({
    loading: true,
  })
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords
          getData(latitude, longitude)
        },
        () => {
          console.log(`couldn't get your location`)
          getData(51.509865, -0.118092)
        }
      )
    } else {
      console.log(`Your browser doesn't support geolocation`)
      getData(51.509865, -0.118092)
    }
  }, [])

  return (
    <WeatherContext.Provider value={[weather, setWeather]}>
      {props.children}
    </WeatherContext.Provider>
  )
}
