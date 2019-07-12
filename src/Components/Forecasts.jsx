import React from 'react'
import styled from 'styled-components'

import Forecast from './Forecast'

export default function Forcasts() {

    const forecasts=[
        {time:"22:00", cloud:"broken clouds", tempNumber:"17"},
        {time:"01:00", cloud:"clear sky", tempNumber:"12"},
        {time:"04:00", cloud:"rain", tempNumber:"11"},
        {time:"07:00", cloud:"few clouds", tempNumber:"14"}]

    const Container = styled.div`
        display:flex;
        width:100%;
        justify-content: space-around;
        padding-left:20px;
        align-items:center;
        &:after{
            content: "";
            background: white;
            position: absolute;
            bottom: 25%;
            left: 30%;
            height: 50%;
            width: 1px;
        }
    `
    return (
        <Container>
            {forecasts.map(forecast=>(
                <Forecast 
                    time={forecast.time} 
                    cloud={forecast.cloud}
                    tempNumber={forecast.tempNumber}
                     
                    key={forecast.time}/>
            ))}
        </Container>
    )
}
