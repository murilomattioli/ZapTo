import * as yup from "yup";

export type DialerFormSchema = {
  phone: string;
};

const schema: yup.ObjectSchema<DialerFormSchema> = yup
  .object()
  .shape({
    phone: yup
      .string()
      .test({
        name: "Código do País",
        message: "O país deve ser +55 (Brasil)",
        test: (val) => {
          const firstThreeDigits = val?.slice(0, 3);
          const isValid = firstThreeDigits === "+55";
          return isValid;
        },
      })
      .test({
        name: "Número de Telefone",
        message: `Ex: (00)0000-0000 ou (00)00000-0000;
          O numero deve ter 10 ou 11 dígitos`,
        test: (val) => {
          const allDigitsExceptCountryCode = val?.slice(3);
          const rules = [
            allDigitsExceptCountryCode?.length === 10,
            allDigitsExceptCountryCode?.length === 11,
          ];
          const isValid = rules.some((rule) => rule);
          return isValid;
        },
      })
      .required("Obrigatório"),
  })
  .noUnknown()
  .required();

export default schema;
