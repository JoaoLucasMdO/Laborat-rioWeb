import { validatorMessage } from "@/constants/validatorMessage";
import * as Yup from "yup";

export const OrderEditValidator = () => {
  const { requiredField, numericField, minValue, length } = validatorMessage;
  return Yup.object().shape({
    date: Yup.string().required(requiredField).length(10, length),
    document: Yup.string().required(requiredField).length(11, length),
    paymentType: Yup.string().required(requiredField),
    itemQuantity: Yup.number()
      .typeError(numericField)
      .required(requiredField)
      .min(1, minValue),
    totalValue: Yup.number()
      .typeError(numericField)
      .required(requiredField)
      .min(0.01, minValue),
  });
};
