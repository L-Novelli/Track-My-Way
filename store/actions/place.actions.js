import * as FileSystem from 'expo-file-system';

import { API_MAPS_KEY } from '../../constants/DataBase';
import { insertAddress } from '../../db';

export const ADD_PLACE = 'ADD_PLACE'

export const addPlace = (title, image, location) => {
    return async dispatch => {

        const Path = FileSystem.documentDirectory + fileName;
        
        const fileName = image.split('/').pop()
        try {
            await FileSystem.moveAsync({
                from: image,
                to: Path
            })

            const result = await insertAddress(
                title,
                Path,
            )

        dispatch({ type: ADD_PLACE, payload: { 
            id: result.insertId,
            title,
            image:Path}})
            
        } catch (error) {
            console.log(error.message)
            throw error
        }
        
    }
}