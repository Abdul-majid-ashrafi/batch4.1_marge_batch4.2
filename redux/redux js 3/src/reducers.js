var obj = {
    result: 3,
    lastValues: []
}
export const reducer = (state = obj, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                result: state.result + action.payload,               //   this is muteable
                lastValues : [...state.lastValues , action.payload]
            }
            break;
        case "REM":
            state = {
                result: state.result - action.payload,               //   this is muteable
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    return state
}
