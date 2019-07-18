import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'
import { WeatherContext } from '../utils/WeatherContext'

import Forecast from './Forecast'
import { useSpring, animated } from 'react-spring'

const media = generateMedia({
  xs: '250px',
  sm: '415px',
  md: '980px',
  lg: '1200px',
})

export default function Forecasts(props) {
  const forecasts = useContext(WeatherContext)[0].forecasts
  const numOfForecasts = props.expandedWeather ? 8 : 4
  const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding-left: 20px;
    align-items: center;
    ${media.lessThan('md')`
      height:100%;
      flex-basis:80%;
  `}
    ${media.lessThan('sm')`
    flex-wrap: wrap;
    `}
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
          numOfForecasts={numOfForecasts}
        />
      ))}
    </Container>
  )
}
