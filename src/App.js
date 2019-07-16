import React from 'react';
import styled from 'styled-components';
import {WeatherProvider} from './utils/WeatherContext';

import Time from './Components/Time'
import Weather from './Components/Weather'

function App() {

  const IMG_SRC = "https://camo.githubusercontent.com/0289e7fcb8b4b91bfbaf1b0829c62be852e0e1b7/68747470733a2f2f6c68342e676f6f676c6575736572636f6e74656e742e636f6d2f2d636e2d43532d7678466e342f55745476714c7a6a6d72492f41414141414141415833592f4f64664b395868524765452f73313932302d77313932302d68313038302d632f4453435f353330302e6a7067"

  const Layout = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: url(${IMG_SRC}) no-repeat center center fixed;
    background-size:cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:#f6f6f6;
  `


  return (
    <WeatherProvider>
      <Layout>
        <Time/>
        <Weather/>
      </Layout>
    </WeatherProvider>
  );
}

export default App;
