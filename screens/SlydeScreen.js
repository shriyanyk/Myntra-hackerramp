import { Animated, StyleSheet, View ,PanResponder} from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { data as dataArray } from '../utils/data'
import Cards from '../utils/Cards'

const SlydeScreen = () => {
  const [data, setData] = useState(dataArray);

  useEffect(() => {
    if (!data.length) {
      setData(dataArray);
    }
  }, [data.length]);
  const removeCard=useCallback(()=>{
    setData(prepState =>prepState.slice(1));
    swipe.setValue({x:0,y:0});
  },[])
  const swipe=useRef(new Animated.ValueXY()).current;
  const panResponder=PanResponder.create({
    onMoveShouldSetPanResponder:()=> true,
    onPanResponderMove:(_,{dx,dy})=>{
      console.log('dx:'+dx+'dy:'+dy);
      swipe.setValue({x:dx,y:dy})
    },
    onPanResponderRelease:(_,{dx,dy})=>
    {
      console.log("released:"+'dx:'+dx+'dy:'+dy); 
      let direction=Math.sign(dx);
      let isActionActive=Math.abs(dx)>200;
      if (isActionActive){
        Animated.timing(swipe,{
          toValue: {x:500*dx,y:dy},
         useNativeDriver:true,
         friction:5,
       }).start(removeCard);
      }
      else {
      Animated.spring(swipe,{
         toValue: {x:0,y:0},
        useNativeDriver:true,
        friction:5,
      }).start();
    }
    }
  });
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <StatusBar hidden={true} />
      {
        data.map((item, index) => {
          let isFirst=index===0;
          let dragHandlers=isFirst? panResponder.panHandlers:{};
          return (<Cards item={item} isFirst={isFirst} swipe={swipe} {...dragHandlers}/>);
        }).reverse()
      }
    </View>
  )
}

export default SlydeScreen;

const styles = StyleSheet.create({});
