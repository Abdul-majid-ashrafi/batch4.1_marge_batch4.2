import { createStore, combineReducers } from 'redux';
import { countReducer, userReducer } from './reducers';

const rootReducers = combineReducers({ countReducer, userReducer })

const store = createStore(rootReducers);

store.subscribe(() => {
    console.log("STORE...: ", store.getState())
})
store.dispatch({ type: "INC", payload: 10 }) //13
store.dispatch({ type: "INC", payload: 20 }) //13

store.dispatch({ type: "MALE", payload: "MAJID" }) //13


