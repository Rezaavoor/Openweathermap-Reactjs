import React,{useContext} from 'react'
import styled from 'styled-components'
import {WeatherContext} from '../utils/WeatherContext'

import Forcasts from './Forecasts'

import sunriseIcon from '../Assets/Sunrise.svg'
import sunsetIcon from '../Assets/Sunset.svg'

import {BrokenClouds,ClearSky,FewClouds,Rain,ScatteredClouds,ShowerRain,Snow,Thunderstorm} from '../utils/WeatherIcons'

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

    const weatherData = useContext(WeatherContext)[0]
    let CloudIMG
    switch (weatherData.symbol) {
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
        <TheWeather>
            <Shadow/>
            <OpenWeather>
                <WeatherNow>
                    <Location>
                        <h3>{`${weatherData.city} , ${weatherData.country}`}</h3>
                    </Location>
                    <Temp>
                        <TempNumber>
                            <h1>{`${weatherData.temperature}°`}</h1>
                        </TempNumber>
                        {/* <Cloud src={WeatherIcons["broken clouds"]}/> */}
                        <CloudIMG/>
                    </Temp>
                    <Suns>
                        <Sun>
                            <SunIcon src={sunriseIcon}/>
                            {weatherData.sunrise}
                        </Sun>
                        <Sun>
                            <SunIcon src={sunsetIcon}/>
                            {weatherData.sunset}
                        </Sun>
                    </Suns>
                </WeatherNow>
                <Forcasts/>
            </OpenWeather>
        </TheWeather>
    )
}
