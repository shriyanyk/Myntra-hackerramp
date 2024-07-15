import { Pressable,StyleSheet,Image, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { i1 } from '../assets'

const CartScreen = ({i1}) => {
  return (
    <ScrollView style={{marginTop:55,flex:1,backgroundColor:'white'}}>
      <View style={{padding:10,flexDirection:"row",alignItems:"centre"}}>
        <Text style={{fontSize:18}}>Subtotal:6698</Text>
      </View>
      <Pressable style={{
        backgroundColor:'lightgray',
        padding:10,
        borderRadius:5,
        justifyContent:'center',
        alignItems:"center",
        marginHorizontal:10,
        marginTop:10,}}>
        <Text>Proceed to buy 4 items</Text>
      </Pressable>
      <Text style={{height:1,borderColor:'black',borderWidth:1,marginTop:16}}/>
      <View style={{marginHorizontal:10,color:'white'}}>
        <View >
        <Pressable style={{marginVertical:10,flexDirection:"column",alignItems:"absolute"}}>
          <View style={{flexDirection:"row"}}>
            <Image
           source={require('../assets/i1.jpg')}
           style={{ width: 140, height: 140,borderColor:'white',margin:10,padding:20}} 
          />
          <View style={{flexDirection:"column"}}>
          <Text style={{padding:5,fontSize:15,fontWeight:"bold"}}>Floral Summer Dress</Text>
          <Text style={{fontSize:14}}>Qty:1</Text>
          <Text style={{fontSize:14}}>Price:1999</Text>
          </View>
          </View>
          <View style={{flexDirection:"row"}}>
            <Image
           source={require('../assets/i2.jpg')}
           style={{ width: 140, height: 140,borderColor:'white',margin:10,padding:20}} 
          />
          <View style={{flexDirection:"column"}}>
          <Text style={{padding:5,fontSize:15,fontWeight:"bold"}}>Denim Jacket</Text>
          <Text style={{fontSize:14}}>Qty:1</Text>
          <Text style={{fontSize:14}}>Price:799</Text>
          </View>
          </View>
          <View style={{flexDirection:"row"}}>
            <Image
           source={require('../assets/i6.jpg')}
           style={{ width: 140, height: 140,borderColor:'white',margin:10,padding:20}} 
          />
          <View style={{flexDirection:"column"}}>
          <Text style={{padding:5,fontSize:15,fontWeight:"bold"}}>Winter Coat</Text>
          <Text style={{fontSize:14}}>Qty:1</Text>
          <Text style={{fontSize:14}}>Price:3900</Text>
          </View>
          </View>
          </Pressable>
          </View>
      </View>
    </ScrollView>
  )
}


export default CartScreen

const styles = StyleSheet.create({})