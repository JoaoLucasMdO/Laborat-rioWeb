import { validatorMessage } from "@/constants/validatorMessage";
import * as Yup from "yup";

export const ProductEditValidator = () => {
  const { requiredField, numericField, minValue, minLength, maxLength } =
    validatorMessage;
  return Yup.object().shape({
    description: Yup.string()
      .required(requiredField)
      .min(3, minLength)
      .max(100, maxLength),
    brand: Yup.string().required(requiredField).max(80, maxLength),
    value: Yup.number()
      .typeError(numericField)
      .min(0.01, minValue)
      .required(requiredField),
    weight: Yup.number().typeError(numericField).min(0.01, minValue),
    flavor: Yup.string(),
  });
};
