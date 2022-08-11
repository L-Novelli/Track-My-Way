import {ImageBackground, StyleSheet, Text, View} from 'react-native'

import { ACTIONS } from '../data/actions';
import React from "react";

const image = {uri: 'https://w0.peakpx.com/wallpaper/905/260/HD-wallpaper-mountain-biking-downhill-mtb.jpg'}


const MTB = (route, navigation) => {
    return(
        <ImageBackground  source={image} 
        resizeMode="cover" 
        style={styles.image}
        >
            <View style={styles.screen}>
                <Text> MTB </Text>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    image:{
        justifyContent: "center",
      },
})
export default MTB;