import { createStore } from 'redux';

const reducer = (state = 0, action) => {
    if (action.type === "INC") {
        return state + action.payload
    }
    else if (action.type === "DEC") {
        return state - action.payload
    }
    return state
}

const store = createStore(reducer);

store.subscribe(() => {
    console.log("STORE...: ", store.getState())
})

store.dispatch({ type: "INC", payload: 10 })
store.dispatch({ type: "INC", payload: 15 })
store.dispatch({ type: "DEC", payload: 19 })