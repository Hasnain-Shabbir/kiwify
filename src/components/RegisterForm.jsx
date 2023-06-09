import React from 'react';
import { useFormik } from 'formik';
import { InputGroup, Checkbox } from '.';
import { registerSchema } from '../schema';

const initialValues = {
  email: '',
  confirmEmail: '',
  password: '',
  terms: false,
};

const RegisterForm = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues,
      validationSchema: registerSchema,
      onSubmit: (values, action) => {
        console.log(
          '🚀 ~ file: RegisterForm.jsx:20 ~ RegisterForm ~ values:',
          values
        );
        action.resetForm();
      },
    });
  const { email, confirmEmail, password, terms } = values;

  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
        <form onSubmit={handleSubmit}>
          <InputGroup
            label='E-mail'
            name='email'
            id='email'
            type='email'
            touched={touched.email}
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
          />
          <InputGroup
            label='repeat email'
            name='confirmEmail'
            id='confirmEmail'
            type='email'
            touched={touched.confirmEmail}
            value={confirmEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.confirmEmail}
            styles='mt-6'
          />
          <InputGroup
            label='Password'
            name='password'
            id='password'
            type='password'
            touched={touched.password}
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
            styles='mt-6'
          />
          <Checkbox
            touched={touched.terms}
            value={terms}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.terms}
          />

          <div className='mt-6'>
            <button
              type='submit'
              className='w-full flex justify-center cursor-pointer text-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'
            >
              create an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
