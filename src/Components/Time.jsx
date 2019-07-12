import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
    width:200px;
    height: 100px;
    position: relative;
    left:25%;
    top:25%;
    z-index:10;
    text-align:center;
    color: #f6f6f6;
`
const TheTime = styled.div`
    width:100%;
    height:50%;
    font-size: 3rem;
    padding:auto;
`
const TheDate = styled.div`
    width:100%;
    height:50%;
    font-size: 1rem;
    margin-top:10px;
    letter-spacing:5px;
`

const Shadow = styled.div`
    width:100%;
    height:100%;
    background-color:white;
    /* opacity: 0.1; */
    /* background: linear-gradient(to bottom, rgba(255,255,255,0),rgba(255,255,255,0.2) 35%,rgba(255,255,255,0)); */
    background: radial-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0));
    position: absolute;
    color:black;
`

export default function Time() {
    return (
        <Layout>
            <Shadow/>
            <TheTime>21:13</TheTime>
            <TheDate>2019-07-09 Thu</TheDate>
        </Layout>
    )
}
