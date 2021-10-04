import localStorage from "localStorage";

export default class LocalStorageService {
  static get = key => localStorage.getItem(key);

  static set = (key, data) => {
    localStorage.setItem(key, data);
  };

  static remove = key => {
    localStorage.removeItem(key);
  };
}
