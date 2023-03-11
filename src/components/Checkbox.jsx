import React from 'react';
import { Link } from 'react-router-dom';

const Checkbox = (props) => {
  const { value, touched, onBlur, onChange, error } = props;

  return (
    <div className='mt-6'>
      <label className='relative flex items-start mt-2' htmlFor='terms'>
        <div className='flex items-center h-5'>
          <input
            name='terms'
            type='checkbox'
            id='terms'
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className='form-checkbox h-4 w-4 text-indigo-600 ring-red-500 transition duration-150 ease-in-out cursor-pointer border-red-500'
          />
        </div>
        <div className='ml-2 text-sm leading-5'>
          <p className='font-medium text-gray-700'>
            I have read and accept Kiwify's{' '}
            <Link to='/terms' className='underline'>
              terms of use
            </Link>
            , <br />
            <Link to='/terms' className='underline'>
              software license terms
            </Link>
            ,{' '}
            <Link to='/policy' className='underline'>
              content policy
            </Link>
          </p>
          {error && touched ? (
            <span className='text-red-500 border-b-0'>({error})</span>
          ) : null}
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
