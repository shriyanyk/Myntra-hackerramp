import { StyleSheet, Text,PanResponder ,Image,Dimensions,Animated, View} from 'react-native'
import React, { useCallback } from 'react';
import Choice from './Choice';
//import LinearGradient from 'react-native-linear-gradient';

const {height,width}=Dimensions.get('window');
const Selection=useCallback(()=>{
    return(
    <>
     <View>
        <Choice/>
     </View>
    </>
    );
    },[swipe,isFirst])
const Cards = ({item,isFirst,swipe,...rest}) => {
  return (
    <Animated.View
        style={[{width:width-20,
        height:height-100,
        top:40,
        alighnSelf:'centre',
        position:'absolute',
        borderRadius:50,
        },isFirst && {transform:[...swipe.getTranslateTransform()]},
        ]}
        {...rest}>
        <Image source={item.image} style={{width:'100%',height:'100%',borderRadius:50}}/>
        <Text style={{position:'absolute',
            bottom:100,
            left:20,
            color:'white',
            fontSize:30}}>
          {item.name}  
        </Text>
        <Text style={{position:'absolute',
            bottom:80,
            left:20,
            color:'white',
            fontSize:20}}>
          {item.price}  
        </Text>
        <Text style={{position:'absolute',
            bottom:35,
            left:20,
            color:'white',
            fontSize:15}}>
          {item.description}  
        </Text>
        {isFirst && Choice()}
    </Animated.View>
  )
}

export default Cards;

