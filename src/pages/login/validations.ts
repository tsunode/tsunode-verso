import * as yup from 'yup';

export const schema = yup
  .object({
    email: yup
      .string()
      .email('Deve ser um e-mail')
      .required('E-mail é obrigatório'),
    password: yup.string().required('Senha é obrigatória'),
  })
  .required();
