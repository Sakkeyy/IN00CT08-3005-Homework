import React from 'react'
import { AppRegistry } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { name as appName } from './app.json'
import Login from './screens/Login'

export default function App() {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  )
}

AppRegistry.registerComponent(appName, () => App)


