import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SlydeScreen from '../screens/SlydeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    function BottomTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Home",
                        tabBarLabelStyle: { color: "#FF69B4" },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Entypo name="home" size={24} color="#FF69B4" />
                            )
                                : (
                                    <Feather name="home" size={24} color="black" />
                                )
                    }}
                />
                <Tab.Screen
                    name="Slyde"
                    component={SlydeScreen}
                    options={{
                        tabBarLabel: "SlydeScreen",
                        tabBarLabelStyle: { color: "#FF69B4" },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <MaterialCommunityIcons name="cards" size={24} color="#FF69B4" />
                            )
                                : (
                                    <MaterialCommunityIcons name="cards-outline" size={24} color="black" />
                                )
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: "Profile",
                        tabBarLabelStyle: { color: "#FF69B4" },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Ionicons name="person-circle" size={24} color="#FF69B4" />
                            )
                                : (
                                    <Ionicons name="person-circle-outline" size={24} color="black" />
                                )
                    }}
                />
            </Tab.Navigator>

        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main"
                    component={BottomTabs}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default StackNavigator

const styles = StyleSheet.create({});