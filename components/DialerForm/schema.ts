import * as yup from "yup";
import { FULL_PHONE_NUMBER, phonePlaceholder } from "./constants";

export type DialerFormSchema = {
  phone: string;
};

const schema: yup.ObjectSchema<DialerFormSchema> = yup
  .object()
  .shape({
    phone: yup
      .string()
      .max(FULL_PHONE_NUMBER.length, `Ex: ${phonePlaceholder}`)
      .test("Número inválido!", `Ex: ${phonePlaceholder}`, (val) => {
        return val?.length === FULL_PHONE_NUMBER.length;
      })
      .test({
        name: "Vazio! P",
        message: "",
        test: (val) => val === "",
      })
      .typeError(`Ex: ${FULL_PHONE_NUMBER}`)
      .required("Obrigatório"),
  })
  .noUnknown()
  .required();

export default schema;
