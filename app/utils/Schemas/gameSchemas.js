import * as yup from "yup";
import Spanish from "../translations/Spanish.json";

export const createGameSchema = yup.object().shape({
  sizeX: yup
    .number()
    .min(5, "El valor minimo es 5.")
    .required("El campo es requerido"),
  sizeY: yup
    .number()
    .min(5, "El valor minimo es 5.")
    .required(),
  difficulty: yup
    .number()
    .min(0)
    .max(3)
    .required("El campo es requerido")
});
