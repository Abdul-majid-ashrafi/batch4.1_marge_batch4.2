// import { createStore, applyMiddleware } from 'redux'
// import { reducer } from './reducers.js'

// const logger = (store) => (next) => (action) => {
//     // console.log("AcTION", action)
//     next(action)
// }

// const middleware = applyMiddleware(logger)

// const store = createStore(reducer, middleware)

// store.subscribe(() => {
//     console.log("............", store.getState())
// })
// store.dispatch({
//     type: "ADD",
//     payload: 101
// })
// store.dispatch({
//     type: "ADD",
//     payload: 105
// })
// store.dispatch({
//     type: "REM",
//     value: 100
// })









// STEP 1

// import { createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
// import { reducer } from './reducers.js'

// const middleware = applyMiddleware(logger())

// const store = createStore(reducer, middleware)

// // store.subscribe(() => { //now you dont need to subscribe 
// //     console.log("............", store.getState())
// // })

// store.dispatch({
//     type: "ADD",
//     payload: 101
// })
// store.dispatch({
//     type: "ADD",
//     payload: 105
// })
// store.dispatch({
//     type: "ADD",
//     payload: 109
// })








// STEP 2

import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { reducer } from './reducers.js'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk, logger())

const store = createStore(reducer, middleware)


// store.dispatch({
//     type: "ADD",
//     value: 101
// })

store.dispatch((dispatcher) => {
    dispatcher({ type: "ADD", payload: 101 })
    // do something asyn
    dispatcher({ type: "ADD", payload: 201 })
    // dispatcher({})
})
