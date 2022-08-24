import { FlatList, StyleSheet, Text, View } from 'react-native'

import PlaceItem from '../components/PlaceItems'
import React from 'react'
import { useSelector } from 'react-redux'

const Galery = ({ navigation }) => {
    const places = useSelector(state => state.places.places)

    const renderItem = (data) => (
            <PlaceItem
            title={data?.item.title}
            image={data?.item.image}
        />
    )
    return (
        <View style={styles.screen}>
           <>
        { places && places.length > 0 ? (
                <FlatList
                    data={places}
                    renderItem={renderItem}
                    keyExtractor={(item) => Date.now()}
                />
            ) : (
                <Text>No places!</Text>
            ) 
        }
        </> 
        </View>
        
    )
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: '#C0C0C0',
        height: '100%'
    }
})


export default Galery