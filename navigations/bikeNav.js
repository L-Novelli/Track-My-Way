import Camera from '../screens/Camera'
import Cycling from "../screens/Cycling";
import Galery from '../screens/Galery'
import Map from '../screens/Map'
import {NavigationContainer} from "@react-navigation/native";
import {Platform} from 'react-native';
import React from "react";
import Stopwatch from '../screens/Stopwatch'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const bikeNav = () => {
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Cycling" screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLORS.primary : COLORS.accent
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
            headerTitleStyle: {
                fontWeight: 'font'
            }
        }}>
            <Stack.Screen name="CYCLING" component={Cycling}/>
            <Stack.Screen name="Camera" component={Camera} options={({ route }) => ({title: route.params.name})}/>
            <Stack.Screen name="Galery" component={Galery} options={({ route }) => ({title: route.params.name})}/>
            <Stack.Screen name="Map" component={Map} options={({ route }) => ({title: route.params.name})}/>
            <Stack.Screen name="Stopwatch" component={Stopwatch} options={({ route }) => ({title: route.params.name})}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default bikeNav;
