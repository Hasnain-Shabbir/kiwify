import * as Yup from 'yup';

export const registerUpSchema = Yup.object({
  email: Yup.string().email().required('This field is mandatory'),
  password: Yup.string().required('This field is mandatory'),
  confirmEmail: Yup.string()
    .email()
    .required('This field is mandatory')
    .oneOf([Yup.ref('email'), null], 'The two emails must be the same.'),
  terms: Yup.bool().oneOf([true], 'This field is mandatory'),
});
