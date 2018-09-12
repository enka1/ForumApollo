import React, {Component} from 'react'
import {render} from 'react-dom'
import {ApolloProvider} from 'react-apollo'
import 'antd/dist/antd.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/root.css'

import {client} from './config/apollo'  
import AppRoute from './routes'


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
