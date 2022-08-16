import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from "react";

const Grid = ({item, onSelected}) => {
    return(
        <View style={styles.grid}>
            <TouchableOpacity style={{...styles.container, backgroundColor: item.color}}
            onPress={() => onSelected(item)}>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    grid: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 6,
    },
    container: {
        flex: 1,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        elevation: 3,
    },
    title: {
        fontFamily: 'font',
        color: 'white',
        fontSize: 25,
    }
})

export default Grid;