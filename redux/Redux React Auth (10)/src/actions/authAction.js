export function register() {
    return {
        type: "REGISTER"
    }
}
export function registerOnFirebase() {
    return {
        type: "REGISTER_SUCCESS"
    }
}
export function registerFail(error) {
    return {
        type: "REGISTER_FAIL",
        payload: error.message
    }
}





export function login() {
    return {
        type: "LOGIN"
    }
}
export function loginWithFirebase(user) {
    return {
        type: "LOGIN_SUCCESS",
        payload: user
    }
}
export function loginFail(error) {
    return {
        type: "LOGIN_FAIL",
        payload: error.message
    }
}