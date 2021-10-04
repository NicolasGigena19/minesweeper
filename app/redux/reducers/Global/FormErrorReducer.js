import formErrorActionNames from "../../../utils/constants/actionsName/Global/formErrorActionsName";

const stateDefault = {
  errors: []
};

const errorReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case formErrorActionNames.error:
      return Object.assign({}, state, {
        errors: action.error
      });
    case formErrorActionNames.clearErrors:
      return Object.assign({}, state, {
        errors: []
      });
    default:
      return state;
  }
};

export default errorReducer;
