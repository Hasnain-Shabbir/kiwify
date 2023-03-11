import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components';
import { KiwifyLogo } from '../assets';

const Login = () => {
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
              Login to your account
            </h2>
            <p className='mt-2 text-center text-base leading-5 text-gray-600'>
              Or{' '}
              <Link
                to='/'
                className='font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:underline focus:outline-none'
              >
                register
              </Link>
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default Login;
