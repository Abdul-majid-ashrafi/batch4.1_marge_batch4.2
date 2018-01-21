var INITIAL_STATE = {
    isAuth: false,
    user: {}
}
const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN":
            return { isAuth: true, user: action.value }
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