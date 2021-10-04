import { dispach } from "../../app";
import { redirectTo } from "./redirectTo";

export const putAllResponses = response => {
  let path;

  for (const element of response) {
    if (element.type) {
      dispach(element);
    } else if (element.redirect) {
      path = element.redirect;
    }
  }
  if (path) {
    redirectTo(path);
  }
};
