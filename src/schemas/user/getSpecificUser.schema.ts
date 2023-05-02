import * as yup from "yup";
import { SchemaOf } from "yup";
import { iGetUserResponse } from "../../interfaces/user";

export const getSpecificUserSchema: SchemaOf<iGetUserResponse> = yup
  .object()
  .shape({
    address: yup.object().shape({
      id: yup.string().required(),
      complement: yup.string().required(),
      zipcode: yup.string().required(),
      number: yup.string().required(),
      street: yup.string().required(),
      city: yup.string().required(),
      state: yup.string().required(),
    }),
    birthdate: yup.string().required(),
    isSeller: yup.boolean().required(),
    image_url: yup.string().required(),
    description: yup.string().required(),
    cpf: yup.string().required(),
    telephone: yup.string().required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    id: yup.string().required(),
  });
