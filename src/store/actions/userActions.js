export const Logout = () => {
  return {
    type: 'USER_LOGOUT',
    payload: {

    }
  }
}

export const Login = (email, password) => {
  return {
    type: 'USER_LOGIN',
    payload: {
      email,
      password
    }
  }
}