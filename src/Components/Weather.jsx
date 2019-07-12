import React from 'react'
import styled from 'styled-components'

import Forcasts from './Forecasts'

import sunriseIcon from '../Assets/Sunrise.svg'
import sunsetIcon from '../Assets/Sunset.svg'

import WeatherIcons from '../utils/WeatherIcons'

const TheWeather = styled.div`
    width:60vw;
    height: 400px;
    position: absolute;
    left:10%;
    top:5%;
    z-index:10;
    text-align:center;
    display:flex;
    justify-content:left;
    align-items:top;
    text-shadow:2px 0 gray;
    font-size:1rem;
    color: #f6f6f6;
`

const Shadow = styled.div`
    width:100%;
    height:100%;
    background-color:white;
    /* background: radial-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0)); */
    opacity:0.2;
    position: absolute;
    color:black;
`

const OpenWeather = styled.div`
    width:100%;
    display:flex;
`
const WeatherNow = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width:40%;
`
const Location = styled.div`

`
const Temp = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
`
const TempNumber = styled.div`
    font-size:2.5rem;
    text-shadow:none;
`
const Cloud = styled.img`
    height:50px;
`
const Suns = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`
const Sun = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
const SunIcon = styled.img`
    width:90px;
`

export default function Weather() {
    return (
        <TheWeather>
            <Shadow/>
            <OpenWeather>
                <WeatherNow>
                    <Location>
                        <h3>Stockholm, Sweden</h3>
                    </Location>
                    <Temp>
                        <TempNumber>
                            <h1>22°</h1>
                        </TempNumber>
                        <Cloud src={WeatherIcons["broken clouds"]}/>
                    </Temp>
                    <Suns>
                        <Sun>
                            <SunIcon src={sunriseIcon}/>
                            01:48
                        </Sun>
                        <Sun>
                            <SunIcon src={sunsetIcon}/>
                            19:57
                        </Sun>
                    </Suns>
                </WeatherNow>
                <Forcasts/>
            </OpenWeather>
        </TheWeather>
    )
}
