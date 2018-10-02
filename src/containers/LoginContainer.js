import React, {Component} from 'react'
import {compose, graphql} from 'react-apollo'
import axios from 'axios'

import {history} from '../routes'
import {LoginForm} from '../components'
import saveUser from '../graphql/mutation/client/save_user.mutation'
import {fetch_user} from '../methods'
import {socket} from '../'

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

  googleStategyLoginHandle() {
    const width = 600,
      height = 600
    const left = (window.innerWidth / 2) - (width / 2)
    const top = (window.innerHeight / 2) - (height / 2)
    const url = `http://localhost:3001/auth/google`
    //Open a popup window for user to login with google
    var myWindow = window.open(url, '', `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`)
    // if server emit event Google Login Success save token, then get user and save
    // to local state. Finally, redirect to previos route
    socket.on('Google Login Success', async({token}) => {
      console.log('here')
      myWindow.close()
      localStorage.setItem('auth', token)
      let user = await fetch_user()
      this
        .props
        .saveUser({variables: user})
      history.goBack()
    })
  }

  render() {
    return (<LoginForm
      error={this.state.error}
      googleStategyLoginHandle={this.googleStategyLoginHandle}
      localStrategyLoginHandle={this.localStrategyLoginHandle}/>)
  }
}

export default compose(graphql(saveUser, {name: 'saveUser'}))(LoginContainer)