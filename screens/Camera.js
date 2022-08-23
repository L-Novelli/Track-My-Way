import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import { COLORS } from '../constants/colors'
import ImageSelector from '../components/ImageSelector';
import LocationSelector from '../components/LocationSelector';
import { addPlace } from '../store/actions/place.actions';
import { useDispatch } from 'react-redux';

const Camera = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const handleTitleChange = text => setTitle(text)
    const [location, setLocation] = useState(null);

    const handleSave = () => {
        dispatch(addPlace(title, image));
    }

    return (
        <ScrollView style={{ flex: 1}} scrollEnabled>
            <Text style={styles.label}>Title</Text>
            <TextInput 
                style={styles.input}
                value={title}
                onChangeText={handleTitleChange}    
            />
            <ImageSelector onImage={image => setImage(image)} />
            <Button title='Save' color={COLORS.MAROON} onPress={handleSave}/>
</ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
    },
})

export default Camera