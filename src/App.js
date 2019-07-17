import React from 'react'
import styled from 'styled-components'
import { WeatherProvider } from './utils/WeatherContext'
import { UiProvider } from './utils/UiContext'

import Time from './Components/Time'
import Weather from './Components/Weather'

function App() {
  const IMG_SRC =
    'https://camo.githubusercontent.com/0f8dffab56b75219a9b005c6c590015bb79d5f9d/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f2d6769382d617a57356841512f5547645351716b39475f492f41414141414141414a746f2f696e494852774f437933632f73313932302d77313932302d68313038302d632f5465746f6e536877616261636865722e6a7067'

  const Layout = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: url(${IMG_SRC}) no-repeat center center fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #f6f6f6;
  `

  return (
    <WeatherProvider>
      <UiProvider>
        <Layout>
          <Time />
          <Weather />
        </Layout>
      </UiProvider>
    </WeatherProvider>
  )
}

export default App
