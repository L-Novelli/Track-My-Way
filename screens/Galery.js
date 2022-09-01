import * as addressAction from '../store/actions/place.actions'

import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PlaceItem from '../components/PlaceItems'

const Galery = ({ navigation }) => {

    const dispatch = useDispatch();
    const places = useSelector(state => state.places.places)

    const renderItem = (data) => (
            <PlaceItem
            id={data.item.id}
            title={data?.item.title}
            image={data?.item.image}
            address={data?.item.address}
        />
    )

    useEffect(() => {
        dispatch(addressAction.loadAddress())
    }, [])

    return (
        <View style={styles.screen}>
           <>
        { places?.length > 0 ? (
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