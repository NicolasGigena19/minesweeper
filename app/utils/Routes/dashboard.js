import Dashboard from "@material-ui/icons/Dashboard";
import { roles } from "../constants/rolesConstants";
import companyAdminDashboard from "../../pages/Company-Admin/DashboardPage/Index";
import managerDashboard from "../../pages/Manager/DashboardPage/Index";
import studentDashboard from "../../pages/Student/DashboardPage/Index";
import academyAdminDashboard from "../../pages/Academy-Admin/DashboardPage/Index";
import teacherDashboard from "../../pages/Teacher/DashboardPage/Index";

export default {
  layout: "/dashboard",
  accessLevel: [
    roles.academyAdmin,
    roles.companyAdmin,
    roles.manager,
    roles.student,
    roles.teacher
  ],
  children: [
    {
      path: "/academy-admin",
      auth: [
        {
          accessLevel: [roles.academyAdmin],
          component: academyAdminDashboard,
          name: "Dashboard Academy Admin",
          icon: Dashboard
        }
      ]
    },
    {
      path: "/company-admin",
      auth: [
        {
          accessLevel: [roles.companyAdmin],
          component: companyAdminDashboard,
          name: "Dashboard Admin",
          icon: Dashboard
        }
      ]
    },
    {
      path: "/manager",
      auth: [
        {
          accessLevel: [roles.manager],
          component: managerDashboard,
          name: "Dashboard Gerente",
          icon: Dashboard
        }
      ]
    },
    {
      path: "/student",
      auth: [
        {
          accessLevel: [roles.student],
          component: studentDashboard,
          name: "Dashboard Estudiante",
          icon: Dashboard
        }
      ]
    },
    {
      path: "/teacher",
      auth: [
        {
          accessLevel: [roles.teacher],
          component: teacherDashboard,
          name: "Dashboard Profesor",
          icon: Dashboard
        }
      ]
    }
  ]
};
