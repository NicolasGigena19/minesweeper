import CompanyAdminOnboardingPage from "../../pages/Company-Admin/OnboardingPage/Index";
import ManagerOnboardingPage from "../../pages/Manager/OnboardingPage/Index";
import StudentOnboardingPage from "../../pages/Student/OnboardingPage/Index";
import TeacherOnboardingPage from "../../pages/Teacher/OnboardingPage/Index";
import { roles } from "../constants/rolesConstants";

export default {
  layout: "/onboarding",
  accessLevel: [roles.public],
  children: [
    {
      path: "/company-admin",
      auth: [
        {
          accessLevel: [roles.public],
          component: CompanyAdminOnboardingPage
        }
      ]
    },
    {
      path: "/company-admin/confirm",
      auth: [
        {
          accessLevel: [roles.public],
          component: CompanyAdminOnboardingPage
        }
      ]
    },
    {
      path: "/manager",
      auth: [
        {
          accessLevel: [roles.public],
          component: ManagerOnboardingPage
        }
      ]
    },
    {
      path: "/student",
      auth: [
        {
          accessLevel: [roles.public],
          component: StudentOnboardingPage
        }
      ]
    },
    {
      path: "/teacher",
      auth: [
        {
          accessLevel: [roles.public],
          component: TeacherOnboardingPage
        }
      ]
    }
  ]
};
