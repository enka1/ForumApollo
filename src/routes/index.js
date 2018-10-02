import React, {Component} from 'react'
import {graphql, compose} from 'react-apollo'
import {Route, Switch, Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import {HomePage, LoginPage, PostDetailPage, UserPage, RegisteredPage} from '../page'
import {fetch_user} from '../methods'
import saveUser from '../graphql/mutation/client/save_user.mutation'
import attachMenu from '../mixin/AttachMenu'

export const history = createBrowserHistory()
class RouteController extends Component {
  async componentDidMount() {
    let user = await fetch_user()
    if (user) 
      this.props.saveUser({variables: user})
  }
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={attachMenu(HomePage)}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/register" component={RegisteredPage}/>
          <Route path="/user/:id" component={attachMenu(UserPage)}/>
          <Route path="/post/:id" component={attachMenu(PostDetailPage)}/>
        </Switch>
      </Router>
    )
  }
}

export default compose(graphql(saveUser, {name: 'saveUser'}))(RouteController)