
const initialState = {
  isLogin: false
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGOUT': {
      return {...state, isLogin: false}
    }
    case 'USER_LOGIN': {
        return {...state, isLogin: true}
    }
    default:
      return state
  }
}