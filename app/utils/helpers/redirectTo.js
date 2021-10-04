import { push } from "../../redux/config/history";

export const page = {
  game: "/game",
  history: "/history"
};

export const redirectTo = (path, params = false) => {
  if (params) {
    let search = "?";

    for (const param in params) {
      search +=
        new URLSearchParams({ [param]: params[param] }).toString() + "&";
    }
    search = search.substring(0, search.length - 1);
    push({
      path,
      search
    });
  } else {
    push(path);
  }
};

export const redirectToAsCallBack = path => ({ redirect: path });
