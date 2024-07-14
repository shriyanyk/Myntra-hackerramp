import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const SlydeScreen = () => {
  return (
    <View style={{flex:1,alignItems:"centre",backgroundColor:"white"}}>
      <StatusBar hidden={true}/>
    </View>
  )
}

export default SlydeScreen

const styles = StyleSheet.create({})
