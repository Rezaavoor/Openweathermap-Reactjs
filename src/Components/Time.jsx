import React, { useContext } from 'react'
import styled from 'styled-components'
import { WeatherContext } from '../utils/WeatherContext'

const Layout = styled.div`
  width: 200px;
  height: 100px;
  position: relative;
  left: 25%;
  top: 25%;
  z-index: 10;
  text-align: center;
  color: #f6f6f6;
`
const TheTime = styled.div`
  width: 100%;
  height: 50%;
  font-size: 3rem;
  padding: auto;
`
const TheDate = styled.div`
  width: 100%;
  height: 50%;
  font-size: 1rem;
  margin-top: 10px;
  letter-spacing: 5px;
`

const Shadow = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  /* opacity: 0.1; */
  /* background: linear-gradient(to bottom, rgba(255,255,255,0),rgba(255,255,255,0.2) 35%,rgba(255,255,255,0)); */
  background: radial-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
  position: absolute;
  color: black;
`

export default function Time() {
  const [data] = useContext(WeatherContext)
  const time = data.forecasts[0].dt_txt.slice(10, 16)
  const date = data.forecasts[0].dt_txt.slice(0, 10)
  return (
    <Layout>
      <Shadow />
      <TheTime>{time}</TheTime>
      <TheDate>{date}</TheDate>
    </Layout>
  )
}
