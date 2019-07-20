import React, { useContext } from 'react'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'
import { WeatherContext } from '../utils/WeatherContext'

import Forecast from './Forecast'

const media = generateMedia({
  xs: '250px',
  sm: '415px',
  md: '980px',
  lg: '1200px',
})

export default function Forecasts(props) {
  const { forecasts } = useContext(WeatherContext)[0]
  const numOfForecasts = props.expandedWeather ? 7 : 5
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
      {forecasts.slice(1, numOfForecasts).map(forecast => (
        <Forecast
          time={forecast.dt_txt.slice(10, 16)}
          symbol={forecast.weather[0].description}
          temperature={Math.round(forecast.main.temp - 273.15)}
          key={forecast.dt}
          tempMax={Math.round(forecast.main.temp_max - 273.15)}
          tempMin={Math.round(forecast.main.temp_min - 273.15)}
          windSpeed={forecast.wind.speed}
          numOfForecasts={numOfForecasts}
        />
      ))}
    </Container>
  )
}
