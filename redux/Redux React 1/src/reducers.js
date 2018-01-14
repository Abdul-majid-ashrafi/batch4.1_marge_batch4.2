var user = {
  name: "Majid ",
  age: 24
}
export const userReducer = (state = user, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        name: action.value
      }
      break;
    case "SET_AGE":
      state = {
        age: action.value
      }
      break;

    default:
      return state
  }
  return state
}
