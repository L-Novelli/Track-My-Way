import {ImageBackground, StyleSheet, Text, View} from 'react-native'

import React from "react";

const Trekking = (route, navigation) => {
    return(
        <ImageBackground  source={image} 
        resizeMode="cover" 
        style={styles.image}
        >
            <View style={styles.screen}>
                <Text> Trekking </Text>
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
export default Trekking;