import React, {Component} from 'react'
import {render} from 'react-dom'
import {ApolloProvider} from 'react-apollo'
import io from 'socket.io-client'

import 'antd/dist/antd.min.css'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui/dist/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/root.css'
import {client} from './config/apollo'
import AppRoute from './routes'

export const socket = io.connect('http://localhost:3001')

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppRoute/>
      </ApolloProvider>
    )
  }
}

render(
  <App/>, document.getElementById('root'))
