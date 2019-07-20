import React, { useEffect, useState, createContext } from 'react'
import axios from 'axios'
export const WeatherContext = createContext()

const WEATHERAPI = '43fd74530bcdf49702a7554ff27e5972'

export const WeatherProvider = props => {
  const lat = 59.28867
  const lng = 18.03322
  const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&mode=json&APPID=${WEATHERAPI}`

  useEffect(() => {
    axios
      .get(url)
      .then(json => {
        const data = json.data
        const theWeather = {
          ...weather,
          city: data.city.name,
          country: data.city.country,
        }
        const forecasts = data.list.slice(0, 10)
        theWeather.forecasts = forecasts
        setWeather(theWeather)
      })
      .catch(ex => console.log(ex))
  }, [])
  const [weather, setWeather] = useState({
    city: 'Stockholm',
    country: 'SE',
    forecasts: [
      {
        dt: 15636132117340,
        main: {
          temp: 299,
          temp_min: 297.462,
          temp_max: 299,
          pressure: 1015.1,
          sea_level: 1015.1,
          grnd_level: 1011.49,
          humidity: 40,
          temp_kf: 1.53,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.83,
          deg: 168.503,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2019-07-20 09:00:00',
      },
      {
        dt: 15636132340,
        main: {
          temp: 299,
          temp_min: 297.462,
          temp_max: 299,
          pressure: 1015.1,
          sea_level: 1015.1,
          grnd_level: 1011.49,
          humidity: 40,
          temp_kf: 1.53,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.83,
          deg: 168.503,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2019-07-20 09:00:00',
      },
      {
        dt: 1534234613200,
        main: {
          temp: 299,
          temp_min: 297.462,
          temp_max: 299,
          pressure: 1015.1,
          sea_level: 1015.1,
          grnd_level: 1011.49,
          humidity: 40,
          temp_kf: 1.53,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.83,
          deg: 168.503,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2019-07-20 09:00:00',
      },
      {
        dt: 1565657657613200,
        main: {
          temp: 299,
          temp_min: 297.462,
          temp_max: 299,
          pressure: 1015.1,
          sea_level: 1015.1,
          grnd_level: 1011.49,
          humidity: 40,
          temp_kf: 1.53,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.83,
          deg: 168.503,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2019-07-20 09:00:00',
      },
      {
        dt: 15636133573200,
        main: {
          temp: 299,
          temp_min: 297.462,
          temp_max: 299,
          pressure: 1015.1,
          sea_level: 1015.1,
          grnd_level: 1011.49,
          humidity: 40,
          temp_kf: 1.53,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.83,
          deg: 168.503,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2019-07-20 09:00:00',
      },
      {
        dt: 156361322498400,
        main: {
          temp: 299,
          temp_min: 297.462,
          temp_max: 299,
          pressure: 1015.1,
          sea_level: 1015.1,
          grnd_level: 1011.49,
          humidity: 40,
          temp_kf: 1.53,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.83,
          deg: 168.503,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2019-07-20 09:00:00',
      },
      {
        dt: 1563613249874200,
        main: {
          temp: 299,
          temp_min: 297.462,
          temp_max: 299,
          pressure: 1015.1,
          sea_level: 1015.1,
          grnd_level: 1011.49,
          humidity: 40,
          temp_kf: 1.53,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.83,
          deg: 168.503,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2019-07-20 09:00:00',
      },
      {
        dt: 1563623438713200,
        main: {
          temp: 299,
          temp_min: 297.462,
          temp_max: 299,
          pressure: 1015.1,
          sea_level: 1015.1,
          grnd_level: 1011.49,
          humidity: 40,
          temp_kf: 1.53,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.83,
          deg: 168.503,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2019-07-20 09:00:00',
      },
      {
        dt: 1563613242439200,
        main: {
          temp: 299,
          temp_min: 297.462,
          temp_max: 299,
          pressure: 1015.1,
          sea_level: 1015.1,
          grnd_level: 1011.49,
          humidity: 40,
          temp_kf: 1.53,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.83,
          deg: 168.503,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2019-07-20 09:00:00',
      },
    ],
  })

  return (
    <WeatherContext.Provider value={[weather, setWeather]}>
      {props.children}
    </WeatherContext.Provider>
  )
}
