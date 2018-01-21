
const INITIAL_STATE = {
    authUser: {},
    isAuthenticated: false,
    isProcessing: false,
    isRegistered: false,
    isError: false,
    errorMessage: {}
}
const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "REGISTER":
            return { ...state, isProcessing: true, isRegistered: false, isError: false };

        case "REGISTER_SUCCESS":
            return { ...state, isRegistered: true, isProcessing: false };

        case "REGISTER_FAIL":
            return { ...state, errorMessage: action.payload, isProcessing: false, isError: true };

        case "LOGIN":
            return { ...state, isProcessing: true, isAuthenticated: false, isError: false };

        case "LOGIN_SUCCESS":
            return { ...state, isAuthenticated: true, authUser: action.payload, isProcessing: false, isRegistered: false, errorMessage: {} };

        case "LOGIN_FAIL":
            return { ...state, errorMessage: action.payload, isProcessing: false, isError: true };
        default:
            return state
    }
}
export default authReducer