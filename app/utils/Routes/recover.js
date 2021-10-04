import AccountRecoveryPage from "../../pages/Auth/Recovery/AccountRecovery/Index";
import AccountResetPage from "../../pages/Auth/Recovery/AccountReset/Index";
import AccountRecoverySuccessful from "../../pages/Auth/Recovery/AccountRecoverySuccessful/Index";
import { roles } from "../constants/rolesConstants";

export default {
  layout: "/recover",
  accessLevel: [roles.public],
  children: [
    {
      path: "/auth",
      auth: [
        {
          accessLevel: [roles.public],
          component: AccountRecoveryPage
        }
      ]
    },
    {
      path: "/reset",
      auth: [
        {
          accessLevel: [roles.public],
          component: AccountResetPage
        }
      ]
    },
    {
      path: "/successful",
      auth: [
        {
          accessLevel: [roles.public],
          component: AccountRecoverySuccessful
        }
      ]
    }
  ]
};
