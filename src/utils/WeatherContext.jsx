import React, { useState, createContext } from 'react'

export const WeatherContext = createContext()

export const WeatherProvider = props => {
  const [weather, setWeather] = useState({
    city: 'Stockholm',
    country: 'SE',
    symbol: 'broken clouds',
    sunrise: '01:51',
    sunset: '19:54',
    temperature: '21',
    forecasts: [
      {
        time: '22:00',
        symbol: 'broken clouds',
        windSpeed: '4.16',
        temperature: { current: '22', min: '8', max: '24' },
        humidity: '45%',
        cloudProcent: '58%',
      },
      {
        time: '01:00',
        symbol: 'clear sky',
        windSpeed: '4.16',
        temperature: { current: '22', min: '8', max: '24' },
        humidity: '45%',
        cloudProcent: '58%',
      },
      {
        time: '05:00',
        symbol: 'rain',
        windSpeed: '4.16',
        temperature: { current: '16', min: '8', max: '24' },
        humidity: '45%',
        cloudProcent: '58%',
      },
      {
        time: '07:00',
        symbol: 'thunderstorm',
        windSpeed: '4.16',
        temperature: { current: '22', min: '8', max: '24' },
        humidity: '45%',
        cloudProcent: '58%',
      },
    ],
  })

  return (
    <WeatherContext.Provider value={[weather, setWeather]}>
      {props.children}
    </WeatherContext.Provider>
  )
}
