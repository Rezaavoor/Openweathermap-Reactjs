import React, { useState, createContext } from 'react'

export const UiContext = createContext()

export const UiProvider = props => {
  const [uiProps, setUiProps] = useState({
    weatherWidth: '60vw',
  })

  return (
    <UiContext.Provider value={[uiProps, setUiProps]}>
      {props.children}
    </UiContext.Provider>
  )
}
