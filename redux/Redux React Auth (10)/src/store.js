import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import authReducer from './reducers/authReducer'

export default createStore(
    combineReducers({
        authReducer
    }),
    applyMiddleware(logger())
)