import { FlatList, StyleSheet, View } from 'react-native';

import {CATEGORIES} from '../data/categories';
import Grid from '../components/Grid';
import {ImageBackground} from 'react-native';
import React from "react";

export default function Home ({ navigation }) {
    
    const handlerSelectedCategory = (item) => {
        navigation.navigate(item.title, {
            categoryID: item.id,
            name: item.title
        })
    }
    const renderGrid = ({item}) => {
       return ( <Grid item={item} onSelected={handlerSelectedCategory}/> )
    }

    return(
       <View style={styles.screen}>
        <FlatList
                data={CATEGORIES}
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
