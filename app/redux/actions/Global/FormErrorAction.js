import formErrorActionNames from "../../../utils/constants/actionsName/Global/formErrorActionsName";

export function error(error) {
  return {
    type: formErrorActionNames.error,
    error
  };
}

export function clearErrors() {
  return {
    type: formErrorActionNames.clearErrors
  };
}
