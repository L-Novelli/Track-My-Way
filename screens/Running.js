import {ImageBackground, StyleSheet, Text, View} from 'react-native'

import React from "react";

const Running = (route, navigation) => {
    return(
            <View style={styles.screen}>
                <Text> Running </Text>
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
export default Running;