console.log('Hello World!');

// import React from "react"
// import ReactDOM from "react-dom"
// import { Provider } from "react-redux"

// import Layout from "./components/Layout"
// import store from "./store"

// const app = document.getElementById('app')

// ReactDOM.render(<Provider store={store}>
//   <Layout />
// </Provider>, app);

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById('root')
)
