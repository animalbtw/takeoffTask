import {HOME_ROUTE, LOGIN_ROUTE} from "./constants";
import Home from "../pages/Home";
import Authorization from "../pages/Authorization";

export const authRoutes = [
  {
    path: HOME_ROUTE,
    component: Home
  },
  {
    path: LOGIN_ROUTE,
    component: Authorization
  }
]

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    component: Authorization
  }
]