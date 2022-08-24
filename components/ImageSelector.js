import * as ImagePicker from 'expo-image-picker';

import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import { COLORS } from '../constants/colors';

const ImageSelector = props => {

    const [pickedUri, setPickedUri] = useState()

    const verifyPermissions = async() => {   
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                'Track My Way needs Camera permissions!',
                [{ text: 'Ok' }]
            )
            return false
        }
        return true
    }

    const handlerTakeImage = async () => {
        const isCameraOk = await verifyPermissions();
        if (!isCameraOk) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8
        });

        setPickedUri(image.uri)
        props.onImage(image.uri)
    }


    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri ? (<Text>... no image ...</Text>) : (<Image style={styles.image} source={{uri: pickedUri}}/>)}
            </View>
            <Button title='Take photo'
            color={COLORS.LIGTH_PINK}
            onPress={handlerTakeImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    preview: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: COLORS.BLUSH,
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ImageSelector