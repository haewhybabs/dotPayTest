import React from 'react'
import { StatusBar} from 'react-native';
import MainStack from './app/navigation';
export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <MainStack />
    </>
   
  )
}