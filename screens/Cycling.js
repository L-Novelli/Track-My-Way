import {FlatList, StyleSheet, View} from 'react-native'

import { ACTIONS } from '../data/actions';
import CatGrid from '../components/catGrid';
import React from "react";
import bikeNav from '../navigations/bikeNav'

export default function Cycling ({navigation}) {

    const handlerSelectedCategory = (item) => {
        navigation.navigate(item.title, {
            categoryID: item.id,
            name: item.title
        })
    }

    const renderGrid = ({item}) => {
        return ( <CatGrid item={item} onSelected={handlerSelectedCategory}/> )
     }

    return(
        <View style={styles.screen}>
        <FlatList
                data={ACTIONS}
                keyExtractor={item => item.id}
                renderItem={renderGrid}
                numColumns={1}
                />   
       </View>
            
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#000000'
    }
})