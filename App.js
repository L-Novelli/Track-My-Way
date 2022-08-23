import AppLoading from 'expo-app-loading';
import AppNavigator from './navigations/appNavigator';
import { Provider } from 'react-redux';
import React from 'react';
import { init } from './db';
import store from './store';
import {useFonts} from 'expo-font'

init()
  .then(() => console.log('database initialized'))
  .catch((err) => {
    console.log('failed to connect')
    console.log(err)
  })


export default function App() {
  const[loaded] = useFonts({
    'font': require('./assets/fonts/BebasNeue-Regular.ttf')
  })

  if (!loaded) return <AppLoading/>
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}
