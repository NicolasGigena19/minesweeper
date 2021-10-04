import routes from "../Routes";
import React from "react";
import { Switch, Route } from "react-router-dom";
import authStorage from "../../services/localStorage/authStorage";
import allDashboardPaths from "../Routes/dashboard";
import { redirectTo, page } from "./redirectTo";
import { roles } from "../constants/rolesConstants";

export const switchRoutes = path => {
  var availableRoutes = [];
  var stopSearch = false;

  for (const route of routes) {
    var userHavePermission = false;
    if (route.layout === path) {
      for (const accessLevel of route.accessLevel) {
        if (accessLevel === roles.public || havePermission(accessLevel)) {
          userHavePermission = true;
        }
      }
      if (userHavePermission) {
        for (const children of route.children) {
          for (const auth of children.auth) {
            for (const accessLevel of auth.accessLevel) {
              if (havePermission(accessLevel)) {
                availableRoutes.push(
                  getRoute(route.layout, children.path, auth.component)
                );
                stopSearch = true;
              } else if (accessLevel === roles.public) {
                availableRoutes.push(
                  getRoute(route.layout, children.path, auth.component)
                );
                stopSearch = true;
              }
            }
            if (stopSearch) {
              stopSearch = false;
              break;
            }
          }
        }
      } else {
        redirectTo(page.login);
      }
    }
  }
  return <Switch>{availableRoutes}</Switch>;
};

export const getDashboardPaths = () => {
  var dashboardPaths = [];

  for (const children of allDashboardPaths.children) {
    for (const auth of children.auth) {
      for (const accessLevel of auth.accessLevel) {
        if (havePermission(accessLevel)) {
          dashboardPaths.push({
            path: children.path,
            name: auth.name,
            icon: auth.icon,
            component: auth.component,
            layout: allDashboardPaths.layout
          });
        }
      }
    }
  }
  return dashboardPaths;
};

const getRoute = (layout, path, component) => (
  <Route path={layout + path} component={component} key={layout + path} />
);

const havePermission = role => {
  const user = authStorage.currentUser();
  if (user) {
    for (const userRole of user.roles) {
      if (userRole === role) {
        return true;
      }
    }
  }
  return false;
};
