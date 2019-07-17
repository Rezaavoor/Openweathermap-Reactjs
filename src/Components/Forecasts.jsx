import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { WeatherContext } from '../utils/WeatherContext'

import Forecast from './Forecast'
import { useSpring, animated } from 'react-spring'

export default function Forecasts(props) {
  const forecasts = useContext(WeatherContext)[0].forecasts
  const numOfForecasts = props.expandedWeather ? 8 : 4
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
      left: 250px;
      height: 50%;
      width: 1px;
    }
  `
  return (
    <Container>
      {forecasts.slice(0, numOfForecasts).map(forecast => (
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
    </Container>
  )
}
