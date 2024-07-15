import { StyleSheet, Text,PanResponder ,Image,Dimensions,Animated, View} from 'react-native'
import React, { useCallback ,useRef} from 'react';
import Choice from './Choice';
//import LinearGradient from 'react-native-linear-gradient';

const {height,width}=Dimensions.get('window');

const Cards = ({item,isFirst,swipe,...rest}) => {
  const rotate=swipe.x.interpolate({
    inputRange:[-100,0,100],
    outputRange:['-8deg','0deg','8deg'],
    extrapolate:'clamp',
  });
  const cartOpacity=swipe.x.interpolate({
    inputRange:[10,100],
    outputRange:[0,1],
    extrapolate:'clamp',
  });
  const xOpacity=swipe.x.interpolate({
    inputRange:[-100,-10],
    outputRange:[1,0],
    extrapolate:'clamp',
  });
  const Selection=useCallback(()=>{
    return(
      <>
      <Animated.View style={{position:'absolute',
        top:150,
        right:100,
        opacity:cartOpacity,
        transform:[{rotate:'30deg'}],}}>
        <Choice type={"Cart"}/>
      </Animated.View>
      <Animated.View style={{position:'absolute',
        top:150,
        left:150,
        opacity:xOpacity,
        transform:[{rotate:'-30deg'}],}}>
        <Choice type={"X"}/>
      </Animated.View>
      </>
    )

  },[])

  return (
    <Animated.View
        style={[{width:width-20,
        height:height-100,
        top:40,
        alighnSelf:'centre',
        position:'absolute',
        borderRadius:50,
        },isFirst && {transform:[...swipe.getTranslateTransform(),{rotate:rotate}]},
        ]}
        {...rest}>
        <Image source={item.image} style={{width:'100%',height:'100%',borderRadius:50}}/>
        <Text style={{position:'absolute',
            bottom:100,
            left:20,
            color:'black',
            fontSize:30}}>
          {item.name}  
        </Text>
        <Text style={{position:'absolute',
            bottom:80,
            left:20,
            color:'black',
            fontSize:20}}>
          {item.price}  
        </Text>
        <Text style={{position:'absolute',
            bottom:35,
            left:20,
            color:'black',
            fontSize:15}}>
          {item.description}  
        </Text>
        {isFirst && Selection()}
    </Animated.View>
  )
}

export default Cards;

