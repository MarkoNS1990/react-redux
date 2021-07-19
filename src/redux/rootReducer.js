import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './icecream/icecreamReducer'

export const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})