import {StyleSheet, Text, View} from 'react-native'

import React from "react";

const Stopwatch = (route, navigation) => {
    return(
            <View style={styles.screen}>
                <Text> Stopwatch </Text>
            </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
})
export default Stopwatch;