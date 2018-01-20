import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import UserReducer from './reducers/userReducer'

export default createStore(
    combineReducers({
        UserReducer
    }),
    applyMiddleware(logger())
)