import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Choice = ({type}) => {
  return (
    <View>
      <Text style={{color:type=='Cart'?'hotpink':'black',
      fontSize:50,
      fontWidth:20,
      borderWidth:4,
      borderColor:type=='Cart'?'hotpink':'black',
      paddingLeft:10,
      alignContent:'center',
      paddingRight:10}}>{type}</Text>
    </View>
  )
}

export default Choice

const styles = StyleSheet.create({})