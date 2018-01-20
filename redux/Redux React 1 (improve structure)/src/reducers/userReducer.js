var obj = {
    name: "Majid ",
    age: 24
}
const UserReducer = (state = obj, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                // name: state.name + action.value,
                name: action.value,
                age: state.age
            }
            break;
        case "SET_AGE":
            state = {
                name: state.name,
                age: action.value
            }
            break;
        default:
            return state
    }
    return state
}
export default UserReducer