import { error } from "../../redux/actions/Global/FormErrorAction";
import { dispach } from "../../app";

export default data => {
  if (data.errors === undefined) {
    return error(data.message);
  }
  const errors = [];
  for (const key in data.errors) {
    errors.push({
      path: key,
      message: data.errors[key][0]
    });
  }
  return error(errors);
};
