import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import './index.css';
import store from './data'
import Layout from './components/Layout'

const root = document.getElementById("root")

const App = props => {
  return ( 
    <Provider store={store}>
      <Layout />
    </Provider>
    )
}

render(<App />, root) 