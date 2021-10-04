import { RenderFormErrorSnackbar } from "../../components/molecules/FormErrorSnackbar/FormErrorSnackbar";

export default class ErrorHandler {
  errors = [];

  constructor(errors = []) {
    this.errors = errors;
  }

  isWrong = path => {
    this.thereIsPath(path);

    if (this.thereAreCoincidences(path)) {
      return true;
    }
    return false;
  };

  message = path => {
    this.thereIsPath(path);

    const error = this.thereAreCoincidences(path);
    if (error) {
      return error.message;
    }
  };

  ErrorBar() {
    if (this.thereIsAnErrorWithoutPath()) {
      return RenderFormErrorSnackbar(this.errors);
    }
  }

  thereAreCoincidences = path => {
    for (const error of this.errors) {
      if (error.path === path) {
        return error;
      }
    }
    return false;
  };

  thereIsAnErrorWithoutPath() {
    for (const error of this.errors) {
      if (error.path) {
        return false;
      }
    }
    if (this.errors.length > 0) {
      return true;
    }
    return false;
  }

  thereIsPath = path => {
    if (!path) {
      throw new Error("errorHandler: no path has been sent");
    }
    return true;
  };
}
