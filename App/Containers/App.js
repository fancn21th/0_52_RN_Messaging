import React, { Component } from 'react'
import { connect, addListener } from 'react-native-rong-imlib'
import {
  View,
  Text,
} from 'react-native'
import API from '../Services/Api'

const api = API.create()

addListener('msgRecved', (msg) => {
  console.log(msg)
})

class App extends Component {
  componentDidMount() {
    api
      .login('kang.zheng@okchem.com', '123456')
      .then(res => api.setToken(res.data.chemToken))
      .then(() => api.getIMToken())
      .then(res => connect(res.data.data))
      .then(res => console.log('conncted' + res.data))
      .catch(err => console.error('doom!', err))
  }
  render() {
    return (
      <View>
        <Text>
          Hello World
        </Text>
      </View>
    )
  }
}

export default App
