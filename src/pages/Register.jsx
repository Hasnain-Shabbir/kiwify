import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../components';
import { KiwifyLogo } from '../assets';

const Register = () => {
  return (
    <section>
      <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div>
          <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <img
              src={KiwifyLogo}
              alt='kiwify-logo'
              className='mx-auto h-12 w-auto'
            />
            <h2 className='mt-6 text-center text-3xl font-extrabold leading-9 text-gray-900'>
              create new account
            </h2>
            <p className='mt-2 text-center text-base leading-5 text-gray-600'>
              Or{' '}
              <Link
                to='/login'
                className='font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:underline focus:outline-none'
              >
                log into your existing account
              </Link>
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
};

export default Register;
