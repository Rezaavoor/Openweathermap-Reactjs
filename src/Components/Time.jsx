import React, { useContext } from 'react'
import styled from 'styled-components'
import { WeatherContext } from '../utils/WeatherContext'
import { generateMedia } from 'styled-media-query'

const media = generateMedia({
  xs: '250px',
  sm: '415px',
  md: '980px',
  lg: '1200px',
})

const Layout = styled.div`
  width: 200px;
  height: 100px;
  position: absolute;
  left: 65%;
  top: 65%;
  z-index: 10;
  text-align: center;
  color: #f6f6f6;
  ${media.lessThan('md')`
    left:calc(50%-100px);
  `}
  ${media.lessThan('sm')`
    display:none;
  `}
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
  let time = '',
    date = ''
  if (!data.loading) {
    time = data.forecasts[0].dt_txt.slice(10, 16)
    date = data.forecasts[0].dt_txt.slice(0, 10)
  }
  return data.loading ? (
    <Layout>
      <Shadow />
      Loading
    </Layout>
  ) : (
    <Layout>
      <Shadow />
      <TheTime>{time}</TheTime>
      <TheDate>{date}</TheDate>
    </Layout>
  )
}
