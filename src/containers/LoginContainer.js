import React, {Component} from 'react'
import {compose, graphql} from 'react-apollo'
import axios from 'axios'
import {history} from '../routes'

import {LoginForm} from '../components'
import saveUser from '../graphql/mutation/client/save_user.mutation'
import {fetch_user} from '../methods'

class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: ''
    }
    this.handleLogIn = this
      .handleLogIn
      .bind(this)
  }
  async handleLogIn(username, password) {
    let {data} = await axios.post('/login', {username, password})
    if (data.authenticate) {
      localStorage.setItem('auth', data.token)
      history.push('/')
      let user = await fetch_user()
      this
        .props
        .saveUser({variables: user})
    } else {
      this.setState({error: data.error.msg})
    }
  }
  render() {
    return (<LoginForm error={this.state.error} handleLogIn={this.handleLogIn}/>)
  }
}

export default compose(graphql(saveUser, {name: 'saveUser'}))(LoginContainer)