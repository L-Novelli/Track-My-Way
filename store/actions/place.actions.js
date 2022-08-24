import * as FileSystem from 'expo-file-system';

import { insertAddress } from '../../db';

export const ADD_PLACE = 'ADD_PLACE'

export const addPlace = (title, image) => {
    return async dispatch => {

       
        
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName;
        try {
            await FileSystem.moveAsync({
                from: image,
                to: Path
            })
            console.log(image)
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