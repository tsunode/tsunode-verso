import * as yup from 'yup';

export const schema = yup
  .object({
    email: yup
      .string()
      .email('Deve ser um e-mail')
      .required('E-mail obrigatório'),
    name: yup.string().required('Nome é obrigatório'),
    surname: yup.string().required('Sobrenome obrigatório'),
    title: yup.string().optional(),
    password: yup
      .string()
      .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
      .matches(/[a-z]/, 'Deve conter ao menos 1 letra minuscula')
      .matches(/(\d)/, 'Deve conter ao menos um número')
      .matches(/(\W)|_/, 'Deve conter um caracter especial')
      .matches(/.{8,}/, 'Deve ter no minimo 8 digitos')
      .required('Senha é obrigatória'),
    passwordConfirmation: yup
      .string()
      .oneOf(
        [yup.ref('password')],
        'Confirmação de senha deve ser igual a senha'
      ),
  })
  .required();
