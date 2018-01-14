var obj = {
    result: 3,
    lastValues: []
}

export const reducer = (state = obj, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                result: state.result + action.payload,               //   this is muteable
                lastValues: [...state.lastValues, action.payload]
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


// var user = {
//     name: "Majid ",
//     age: 24
// }

// export const userReducer = (state = user, action) => {
//     switch (action.type) {
//         case "Name":
//             state = {
//                 name: state.name + action.value,
//                 age: state.age
//             }
//             break;
//         case "Age":
//             state = {
//                 name: state.name,
//                 age: action.value
//             }
//             break;
//     }
//     return state
// }