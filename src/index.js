import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import 'antd/dist/antd.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/root.css'
import store from './store'
import AppRoute from './routes'

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <AppRoute/>
      </Provider>
    )
  }
}

render(
  <App/>, document.getElementById('root'))
