import * as FileSystem from 'expo-file-system';

import { fetchAddress, insertAddress } from '../../db';

import { cacheDirectory } from 'expo-file-system';

export const ADD_PLACE = 'ADD_PLACE'
export const LOAD_PLACES = 'LOAD_PLACES'

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
                'Address'
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

export const loadAddress = () => {
    return async dispatch => {
        try {
            const result = await fetchAddress()
            console.log(result)
            dispatch({type: LOAD_PLACES, places: result.rows.array})
        }
        catch(error) {
            throw error
        }
    }
}