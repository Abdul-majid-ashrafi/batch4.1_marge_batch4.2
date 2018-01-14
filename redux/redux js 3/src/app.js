import { createStore } from 'redux'
import { reducer } from './reducers.js'

const store = createStore(reducer)

store.subscribe(() => {
    console.log("............", store.getState())
})
store.dispatch({
    type: "ADD",
    payload: 101
})
store.dispatch({
    type: "ADD",
    payload: 105
})
store.dispatch({
    type: "REM",
    payload: 100
})