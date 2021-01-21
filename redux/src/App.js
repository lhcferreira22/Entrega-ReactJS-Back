import React from 'react'
import { Provider } from "react-redux";
import store from './store'

import Games from './components/Games'
import Musicas from './components/Músicas'

const App = () => {
  return (
    <div>
      <Provider store={ store }>
            <Games />
           <Musicas />
      </Provider>
    </div>
  )
}

export default App
