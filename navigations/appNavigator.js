import {COLORS} from '../constants/colors'
import Cycling from '../screens/Cycling'
import Grid from '../components/Grid';
import Home from '../screens/home';
import Kayaking from '../screens/Kayaking';
import {NavigationContainer} from "@react-navigation/native";
import {Platform} from 'react-native';
import React from "react";
import Running from '../screens/Running';
import Trekking from '../screens/trekking';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLORS.primary : COLORS.accent
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
            headerTitleStyle: {
                fontWeight: 'font'
            }
        }}>
            <Stack.Screen name="Track My Way" component={Home}/>
            <Stack.Screen name="Running" component={Running} options={({ route }) => ({title: route.params.name})}/>
            <Stack.Screen name="Trekking" component={Trekking} options={({ route }) => ({title: route.params.name})}/>
            <Stack.Screen name="Cycling" component={Cycling} options={({ route }) => ({title: route.params.name})}/>
            <Stack.Screen name="Kayaking" component={Kayaking} options={({ route }) => ({title: route.params.name})}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default AppNavigator;