import LoginPage from "../../pages/Auth/LoginPage/Index";
import singUpPage from "../../pages/Auth/SignUpPage/Index";
import unconfirmedUserPage from "../../pages/Auth/UnconfirmedUserPage/Index";
import { roles } from "../constants/rolesConstants";

export default {
  layout: "/auth",
  accessLevel: [roles.public],
  children: [
    {
      path: "/login",
      auth: [
        {
          accessLevel: [roles.public],
          component: LoginPage
        }
      ]
    },
    {
      path: "/signup",
      auth: [
        {
          accessLevel: [roles.public],
          component: singUpPage
        }
      ]
    },
    {
      path: "/unconfirmed-user",
      auth: [
        {
          accessLevel: [roles.public],
          component: unconfirmedUserPage
        }
      ]
    }
  ]
};
