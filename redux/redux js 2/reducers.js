export const countReducer = (state = 3, action) => {
    if (action.type === "INC") {
        return state + action.payload
    }
    else if (action.type === "DEC") {
        return state - action.payload
    }
    return state = 0
}


export const userReducer = (state = "I am ", action) => {
    if (action.type === "MALE") {
        return state + action.payload
    }
    else if (action.type === "FEMALE") {
        return state + action.payload
    }
    return state
}