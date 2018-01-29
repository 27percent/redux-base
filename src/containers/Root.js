import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import App from './App'
import UserPage from './UserPage'
import RepoPage from './RepoPage'
import ConfiguratorPage from './ConfiguratorPage'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/composer" component={ConfiguratorPage}/>
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root


// <Route exact path="/" component={App}/>
//   <Route path="/:login/:name" component={RepoPage} />
//   <Route path="/:login" component={UserPage} />
//   <Route path="configurator" component={ConfiguratorPage} />
// </Route>