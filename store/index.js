import { applyMiddleware, combineReducers, createStore } from 'redux'

import placeReducer from './reducers/place.reducer'
import thunk from 'redux-thunk'

const RootReducer = combineReducers({
    places: placeReducer
   
})

export default createStore(RootReducer, applyMiddleware(thunk))