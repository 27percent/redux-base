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

import './styles/index.scss'
import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'

import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import App from './containers/App'
import ConfiguratorPageContainer from './containers/ConfiguratorPageContainer'
import WelcomePageContainer from './containers/WelcomePageContainer'

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

const store = configureStore(undefined, history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Redirect exact from='/' to='/welcome'/>
        <Route path="/welcome" component={WelcomePageContainer}/>
        <Route path="/composer" component={ConfiguratorPageContainer}/>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
