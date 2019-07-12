import React from 'react'
import styled from 'styled-components'

import WeatherIcons from '../utils/WeatherIcons'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height:50%;
`
const Time = styled.div`
`
const Cloud = styled.div`
`
const CloudIMG = styled.img`
    width:50px;
`
const TempNumber = styled.div`
`
const TempLine = styled.div`
`

export default function Forcast(props) {
    return (
        <Container>
            <Time>{props.time}</Time>
            <Cloud>
                <CloudIMG src={WeatherIcons[props.cloud]}/>
            </Cloud>
            <TempNumber>{props.tempNumber+"°"}</TempNumber>
            <TempLine>Line</TempLine>
        </Container>
    )
}
