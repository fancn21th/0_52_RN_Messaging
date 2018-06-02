import React, { Component } from 'react'
import RongIMLib from 'react-native-rong-imlib'
import {
  View,
  Text,
} from 'react-native'
import API from '../Services/Api'

const api = API.create()

class App extends Component {
  componentDidMount() {
    api
      .login('kang.zheng@okchem.com', '123456')
      .then(res => console.log(res))
      .catch(() => console.error('doom!'))
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
