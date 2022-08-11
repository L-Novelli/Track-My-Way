import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import AppNavigator from './navigations/appNavigator';
import React from 'react';
import {useFonts} from 'expo-font'

export default function App() {
  const[loaded] = useFonts({
    'font': require('./assets/fonts/BebasNeue-Regular.ttf')
  })

  if (!loaded) return <AppLoading/>
  return (
    <AppNavigator />
  );
}
