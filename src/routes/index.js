import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import {HomePage, LoginPage} from '../page'
import {fetch_user} from '../actions/authenticate/fetch_user.actions'

export const history = createBrowserHistory()

class RouteController extends Component {
  componentDidMount() {
    this
      .props
      .dispatch(fetch_user())
  }
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/login" component={LoginPage}/>
        </Switch>
      </Router>
    )
  }
}

export default connect(null)(RouteController)
