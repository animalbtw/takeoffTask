
const initialState = {
  isLogin: true
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN': {
      return !state.isLogin
    }
    default:
      return state
  }
}