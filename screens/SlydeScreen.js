import { Animated, StyleSheet, View, PanResponder, TouchableOpacity, Text } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { data as dataArray } from '../utils/data';
import Cards from '../utils/Cards';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SlydeScreen = () => {
  const [data, setData] = useState(dataArray);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (!data.length) {
      setData(dataArray);
    }
  }, [data.length]);

  const removeCard = useCallback(() => {
    setData(prevState => prevState.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, []);

  const swipe = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy }) => {
      console.log('dx:' + dx + ' dy:' + dy);
      swipe.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (_, { dx, dy }) => {
      console.log('released: dx:' + dx + ' dy:' + dy);
      let direction = Math.sign(dx);
      let isActionActive = Math.abs(dx) > 200;
      if (isActionActive) {
        Animated.timing(swipe, {
          toValue: { x: 500 * direction, y: dy },
          useNativeDriver: true,
        }).start(removeCard);
      } else {
        Animated.spring(swipe, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      }
    },
  });

  const handleFilterPress = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.filterBox}>
        <TouchableOpacity style={styles.filterIcon} onPress={handleFilterPress}>
          <Ionicons name="filter" size={30} color="black" />
        </TouchableOpacity>
      </View>
      {isDropdownVisible && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity style={styles.dropdownItemContainer} onPress={() => handleCategoryPress('price')}>
            <Text style={styles.dropdownItem}>Price</Text>
            <Ionicons name="chevron-down" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItemContainer} onPress={() => handleCategoryPress('category')}>
            <Text style={styles.dropdownItem}>Category</Text>
            <Ionicons name="chevron-down" size={20} color="black" />
          </TouchableOpacity>
          {selectedCategory === 'category' && (
            <View style={styles.subMenu}>
              {['Bags', 'Pants', 'Tops', 'Dresses', 'Jackets'].map(subCategory => (
                <TouchableOpacity key={subCategory} onPress={() => setData(dataArray.filter(item => item.category === subCategory.toLowerCase()))}>
                  <Text style={styles.dropdownItem}>{subCategory}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <TouchableOpacity style={styles.dropdownItemContainer} onPress={() => handleCategoryPress('rating')}>
            <Text style={styles.dropdownItem}>Rating</Text>
            <Ionicons name="chevron-down" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItemContainer} onPress={() => handleCategoryPress('occasion')}>
            <Text style={styles.dropdownItem}>Occasion</Text>
            <Ionicons name="chevron-down" size={20} color="black" />
          </TouchableOpacity>
        </View>
      )}
      {data.map((item, index) => {
        let isFirst = index === 0;
        let dragHandlers = isFirst ? panResponder.panHandlers : {};
        return <Cards key={item.id} item={item} isFirst={isFirst} swipe={swipe} {...dragHandlers} />;
      }).reverse()}
    </View>
  );
}

export default SlydeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  filterBox: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    zIndex: 1,
  },
  filterIcon: {
    padding: 5,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 90,
    right: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    zIndex: 1,
  },
  dropdownItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  dropdownItem: {
    fontSize: 16,
  },
  subMenu: {
    paddingLeft: 20,
  },
});
