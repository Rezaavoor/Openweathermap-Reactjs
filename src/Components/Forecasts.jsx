import React, { useContext } from 'react'
import styled from 'styled-components'
import { WeatherContext } from '../utils/WeatherContext'

import Forecast from './Forecast'
import { useSpring, animated } from 'react-spring'

export default function Forcasts() {
  // const forecasts=[
  //     {time:"22:00", cloud:"broken clouds", tempNumber:"17"},
  //     {time:"01:00", cloud:"clear sky", tempNumber:"12"},
  //     {time:"04:00", cloud:"rain", tempNumber:"11"},
  //     {time:"07:00", cloud:"few clouds", tempNumber:"14"}]

  const forecasts = useContext(WeatherContext)[0].forecasts

  const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding-left: 20px;
    align-items: center;
    &:after {
      content: '';
      background: white;
      position: absolute;
      bottom: 25%;
      left: 30%;
      height: 50%;
      width: 1px;
    }
  `
  const Arrow = styled(animated.span)`
    position: absolute;
    right: 0%;
    font-size: 2.5rem;
    cursor: pointer;
  `
  return (
    <Container>
      {forecasts.map(forecast => (
        <Forecast
          time={forecast.time}
          symbol={forecast.symbol}
          temperature={forecast.temperature.current}
          key={forecast.time}
          tempMax={forecast.temperature.max}
          tempMin={forecast.temperature.min}
          windSpeed={forecast.windSpeed}
        />
      ))}
      <Arrow>></Arrow>
    </Container>
  )
}
