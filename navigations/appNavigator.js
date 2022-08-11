import {COLORS} from '../constants/colors'
import Grid from '../components/Grid';
import Home from '../screens/home';
import MTB from '../screens/MTB'
import {NavigationContainer} from "@react-navigation/native";
import {Platform} from 'react-native-web';
import React from "react";
import Road from '../screens/Road'
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
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Road" component={Road} options={({ route }) => ({title: route.params.name})}/>
            <Stack.Screen name="MTB" component={MTB} options={({ route }) => ({title: route.params.name})}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default AppNavigator;