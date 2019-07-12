import React from 'react';
import styled from 'styled-components';

import Time from './Components/Time'
import Weather from './Components/Weather'

function App() {

  const IMG_SRC = "https://camo.githubusercontent.com/6d4d1ed965bb69a73d92efaf03a9062e0feb008c/68747470733a2f2f6c68352e676f6f676c6575736572636f6e74656e742e636f6d2f2d365f51786d52526e4a4f382f54776a717342326b7368492f4141414141414142465a772f5f5f2d697254303052326b2f73313932302d77313932302d68313038302d632f5365616c526f636b732d73756e7365742d62656163682d726f636b2e6a7067"

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
    <Layout>
      <Time/>
      <Weather/>
    </Layout>
  );
}

export default App;
