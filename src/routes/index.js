import React, {Component} from 'react'
import {graphql, compose} from 'react-apollo'
import {Route, Switch, Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import axios from 'axios'

import {HomePage, LoginPage} from '../page'
import {fetch_user} from '../methods'
import saveUser from '../graphql/mutation/client/save_user.mutation'

export const history = createBrowserHistory()
class RouteController extends Component {
  async componentDidMount() {
    let user = await fetch_user()
    if (user) 
      this.props.saveUser({
        variables: {
          username: user.username,
          display_name: user.display_name,
          avatar: user.avatar
        }
      })
    else {
      let token = localStorage.getItem('auth')
      if (token) {
        let {data} = await axios.get('/token', {
          headers: {
            auth: token
          }
        })
        if (data.authenticate === false) 
          localStorage.setItem('auth', null)
        else {
          user = await fetch_user()
          this
            .props
            .saveUser({
              variables: {
                username: user.username,
                display_name: user.display_name,
                avatar: user.avatar
              }
            })
        }
      }
    }
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

export default compose(graphql(saveUser, {name: 'saveUser'}))(RouteController)