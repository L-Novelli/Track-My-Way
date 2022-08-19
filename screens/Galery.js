import { FlatList, Text } from 'react-native'

import PlaceItem from '../components/PlaceItems'
import React from 'react'
import { useSelector } from 'react-redux'

const Galery = ({ navigation }) => {
    const places = useSelector(state => state.places.places)

    const renderItem = (data) => (
        <PlaceItem
            title={data?.item.title}
            image={data?.item.image}
            address='Tokyo-3, NeoTokyo, Japan, 2077'
            onSelect={() => navigation.navigate('Detalle', { placeID: data.item.id } ) }
        />
    )

    return (
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
    )
}


export default Galery