import {CATEGORIES} from '../data/categories';
import { FlatList } from 'react-native';
import Grid from '../components/Grid';
import React from "react";

export default function Home ({ navigation }) {
    
    const handlerSelectedCategory = (item) => {
        navigation.navigate('Products', {
            categoryID: item.id,
            name: item.id
        })
    }
    const renderGrid = ({item}) => {
       return ( <Grid item={item} onSelected={handlerSelectedCategory}/> )
    }

/*        return(
        <View style={styles.container}>
            <Text> Mountain Bike</Text>
            <Button title = "MTB" onPress={() => {navigation.navigate('MTB')}}/>
            <Text> Road Bike</Text>
            <Button title = "Road" onPress={() => {navigation.navigate('Road')}}/>
        </View>
        ) */

    return(
       
            <FlatList
                data={CATEGORIES}
                keyExtractor={item => item.id}
                renderItem={renderGrid}
                numColumns={1}
                />   
    )
}