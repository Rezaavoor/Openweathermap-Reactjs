import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import windIcon from '../Assets/Wind.svg'

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

const Container = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 50%;
`
const Time = styled.div``
const Temp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  position: relative;
`
const TempCurrent = styled(animated.div)`
  position: absolute;
`
const TempMinMax = styled(animated.div)`
  display: inline-flex;
  flex-direction: column;
  font-size: 0.7rem;
  position: relative;
`
const TempMax = styled.div`
  color: tomato;
  text-shadow: none;
`
const TempMin = styled.div`
  color: lightblue;
  text-shadow: none;
`
const Wind = styled(animated.div)`
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  position: relative;
`
const WindIcon = styled.img`
  width: 20px;
`
const TempLine = styled.div``

export default function Forcast(props) {
  const [expanded, setExpanded] = useState(false)
  const containerSpring = useSpring({
    to: {
      height: expanded && props.numOfForecasts === 4 ? '80%' : '50%',
    },
  })
  const tempMinMaxSpring = useSpring({
    to: {
      opacity: expanded ? 1 : 0,
      left: expanded ? '30px;' : '-10px',
    },
  })
  const tempCurrentSpring = useSpring({
    to: {
      left: expanded ? '-25px' : '-5px',
      fontSize: expanded ? '2rem' : '1.5rem',
    },
  })
  const windSpring = useSpring({
    to: {
      opacity: expanded ? '1' : '0',
      right: expanded ? '0px' : '-20px',
    },
  })
  const expand = () => {
    setExpanded(!expanded)
  }

  let CloudIMG
  switch (props.symbol) {
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
  return (
    <Container
      style={containerSpring}
      onMouseEnter={() => expand()}
      onMouseLeave={() => expand()}
    >
      <Time>{props.time}</Time>
      <CloudIMG />
      <Temp>
        <TempCurrent style={tempCurrentSpring}>
          {props.temperature + '°'}
        </TempCurrent>
        <TempMinMax style={tempMinMaxSpring}>
          <TempMax>{props.tempMax + '° ↑'}</TempMax>
          <TempMin>{props.tempMin + '° ↓'}</TempMin>
        </TempMinMax>
      </Temp>
      <Wind style={windSpring}>
        <WindIcon src={windIcon} />
        {props.windSpeed + ' m/s'}
      </Wind>
      <TempLine>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height={`${props.temperature * 2}`}
          viewBox="0 0 15 215"
        >
          <line
            id="Line"
            y2="200"
            transform="translate(7.5 7.5)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="15"
          />
        </svg>
      </TempLine>
    </Container>
  )
}
