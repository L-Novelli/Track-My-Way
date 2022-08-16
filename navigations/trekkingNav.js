import Camera from '../screens/Categories/Camera'
import Galery from '../screens/Categories/Galery'
import Map from '../screens/Categories/Map'
import {NavigationContainer} from "@react-navigation/native";
import {Platform} from 'react-native';
import React from "react";
import Stopwatch from '../screens/Categories/Stopwatch'
import Trekking from '../screens/trekking';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const TNav = () => {
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Trekking" screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLORS.primary : COLORS.accent
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
            headerTitleStyle: {
                fontWeight: 'font'
            }
        }}>
            <Stack.Screen name="Trekking" component={Trekking}/>
            <Stack.Screen name="Camera" component={Camera} options={({ route }) => ({title: route.params.name})}/>
            <Stack.Screen name="Galery" component={Galery} options={({ route }) => ({title: route.params.name})}/>
            <Stack.Screen name="Map" component={Map} options={({ route }) => ({title: route.params.name})}/>
            <Stack.Screen name="Stopwatch" component={Stopwatch} options={({ route }) => ({title: route.params.name})}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default TNav;
