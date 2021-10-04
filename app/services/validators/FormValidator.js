import Validator from "../externalsModules/Validator";
import { dispach } from "../../app";
import { error, clearErrors } from "../../redux/actions/Global/FormErrorAction";

class FormValidator {
  validate = async (form, rules, showErrors = true) => {
    const result = await Validator.make(form, rules);
    if (!result) {
      const errors = [];
      for (const error of Validator.getErrors()) {
        const { path, message } = error;
        errors.push({
          path,
          message
        });
      }
      if (showErrors) {
        dispach(error(errors));
      }
      return false;
    }
    dispach(clearErrors());
    return true;
  };
}

export default new FormValidator();
