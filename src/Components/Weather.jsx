import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'
import { WeatherContext } from '../utils/WeatherContext'
import { UiContext } from '../utils/UiContext'
import { useSpring, animated } from 'react-spring'

import Forecasts from './Forecasts'

import sunriseIcon from '../Assets/Sunrise.svg'
import sunsetIcon from '../Assets/Sunset.svg'

import {
  BrokenClouds,
  ClearSky,
  FewClouds,
  Rain,
  ScatteredClouds,
  ShowerRain,
  Snow,
  Thunderstorm,
} from '../utils/WeatherIcons'

const media = generateMedia({
  xs: '250px',
  sm: '415px',
  md: '980px',
  lg: '1200px',
})

const TheWeather = styled(animated.div)`
  height: 350px;
  position: absolute;
  left: 10%;
  top: 5%;
  z-index: 10;
  text-align: center;
  display: flex;
  justify-content: left;
  align-items: top;
  text-shadow: 2px 0 gray;
  font-size: 1rem;
  color: #f6f6f6;
  ${media.lessThan('md')`
    justify-content:space-between;
    width:80vw;
    height:500px;
  `}
  ${media.lessThan('sm')`
    font-size:0.7rem;
    width:100vw;
    height:80vh;
  `}
`

const Shadow = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  /* background: radial-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0)); */
  opacity: 0.2;
  position: absolute;
  color: black;
`

const OpenWeather = styled.div`
  z-index: 5;
  width: 100%;
  display: flex;
  ${media.lessThan('md')`
    flex-direction:column;
  `}
`
const WeatherNow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  ${media.lessThan('md')`
    flex-direction:row;
    width:100%;
    align-items:center;
  `}
  ${media.lessThan('sm')`
    /* height:30%; */
  `}
`
const Location = styled.div``
const Temp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${media.lessThan('sm')`
    flex-direction:column;
    justify-content:space-around;
    /* height:50%; */
  `}
`
const TempNumber = styled.div`
  font-size: 2.5rem;
  text-shadow: none;
  margin-left: 2vw;
  ${media.lessThan('sm')`
    font-size:1.5rem;
  `}
`

const Suns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  ${media.lessThan('md')`
    flex-direction: column;
  `}
`
const Sun = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const SunIcon = styled(animated.img)`
  width: 70px;
  ${media.lessThan('md')`width: 50px`}
`
const Cloud = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  top: 20px;
  ${media.lessThan('sm')`
    top:0;
  `}
`
const Arrow = styled.span`
  margin: auto;
  margin-right: 1vw;
  font-size: 2.5rem;
  cursor: pointer;
  ${media.lessThan('md')`
    position:absolute;
    font-size:2rem;
  `}
`
export default function Weather() {
  const [weatherData, setWeatherData] = useContext(WeatherContext)
  const [UiProps, setUiProps] = useContext(UiContext)
  let CloudIMG
  console.log(window.innerWidth)
  switch (weatherData.symbol) {
    case 'broken clouds':
      CloudIMG = BrokenClouds
      break
    case 'clear sky':
      CloudIMG = ClearSky
      break
    case 'few clouds':
      CloudIMG = FewClouds
      break
    case 'rain':
      CloudIMG = Rain
      break
    case 'scattered clouds':
      CloudIMG = ScatteredClouds
      break
    case 'shower rain':
      CloudIMG = ShowerRain
      break
    case 'snow':
      CloudIMG = Snow
      break
    case 'thunderstorm':
      CloudIMG = Thunderstorm
      break
    default:
      CloudIMG = <div>Weather Symbol Not Found</div>
  }
  const [expandedWeather, setExpandedWeather] = useState(false)
  const expandWeather = () => {
    expandedWeather && window.innerWidth > 415
      ? setUiProps({
          weatherWidth: '60vw',
        })
      : setUiProps({
          weatherWidth: '80vw',
        })
    setExpandedWeather(expandedWeather => !expandedWeather)
  }
  const weatherSpring = useSpring({
    to: {
      width: UiProps.weatherWidth,
    },
  })
  return (
    <TheWeather style={weatherSpring}>
      <Shadow />
      <OpenWeather>
        <WeatherNow>
          <Location>
            <h3>{`${weatherData.city} , ${weatherData.country}`}</h3>
          </Location>
          <Temp>
            <TempNumber>
              <h1>{`${weatherData.temperature}°`}</h1>
            </TempNumber>
            <Cloud>
              <CloudIMG scale={2} />
            </Cloud>
          </Temp>
          <Suns>
            <Sun>
              <SunIcon src={sunriseIcon} />
              {weatherData.sunrise}
            </Sun>
            <Sun>
              <SunIcon src={sunsetIcon} />
              {weatherData.sunset}
            </Sun>
          </Suns>
        </WeatherNow>
        <Forecasts expandedWeather={expandedWeather} />
        <Arrow onClick={expandWeather}>{expandedWeather ? '<' : '>'}</Arrow>
      </OpenWeather>
    </TheWeather>
  )
}
