import React from 'react'
import styled from 'styled-components'

import {BrokenClouds,ClearSky,FewClouds,Rain,ScatteredClouds,ShowerRain,Snow,Thunderstorm} from '../utils/WeatherIcons'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height:50%;
`
const Time = styled.div`
`
const TempNumber = styled.div`
`
const TempLine = styled.div`
`

export default function Forcast(props) {
    let CloudIMG
    switch (props.symbol) {
        case "broken clouds":
          CloudIMG = BrokenClouds;
          break;
        case "clear sky":
          CloudIMG = ClearSky;
          break;
        case "few clouds":
          CloudIMG = FewClouds;
          break;
        case "rain":
          CloudIMG = Rain;
          break;
        case "scattered clouds":
          CloudIMG = ScatteredClouds;
          break;
        case "shower rain":
          CloudIMG = ShowerRain;
          break;
        case "snow":
          CloudIMG = Snow;
          break;
        case "thunderstorm":
          CloudIMG = Thunderstorm;
          break;
        default:
            CloudIMG=<div>Weather Symbol Not Found</div>
      } 
    return (
        <Container>
            <Time>{props.time}</Time>
            <CloudIMG/>
            <TempNumber>{props.temperature+"°"}</TempNumber>
            <TempLine>Line</TempLine>
        </Container>
    )
}
