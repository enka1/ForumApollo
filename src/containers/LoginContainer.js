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
    this.localStrategyLoginHandle = this
      .localStrategyLoginHandle
      .bind(this)
    this.googleStategyLoginHandle = this
      .googleStategyLoginHandle
      .bind(this)
  }
  async localStrategyLoginHandle(username, password) {
    let {data} = await axios.post('/login', {username, password})
    if (data.authenticate) {
      localStorage.setItem('auth', data.token)
      let user = await fetch_user()
      this
        .props
        .saveUser({variables: user})
      history.goBack()
    } else {
      this.setState({error: data.error.msg})
    }
  }

  async googleStategyLoginHandle() {
    window
      .location
      .replace('http://localhost:3001/auth/google')
  }

  render() {
    return (<LoginForm
      error={this.state.error}
      googleStategyLoginHandle={this.googleStategyLoginHandle}
      localStrategyLoginHandle={this.localStrategyLoginHandle}/>)
  }
}

export default compose(graphql(saveUser, {name: 'saveUser'}))(LoginContainer)