import React from 'react';

const InputGroup = (props) => {
  const {
    label,
    type,
    onChange,
    name,
    id,
    value,
    styles,
    onBlur,
    error,
    touched,
  } = props;

  return (
    <div className={`flex flex-col ${styles}`}>
      <label
        for={id}
        className={`mb-1 block text-sm font-medium leading-5 text-gray-700`}
      >
        {label}
      </label>

      <input
        type={type}
        autoComplete='off'
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`form-input focus:shadow-outline-blue block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm transition duration-150 ease-in-out ${
          error && touched
            ? 'border-red-500 focus:border-red-500'
            : 'focus:border-blue-300'
        } focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5`}
      />
      {error && touched ? (
        <p className='mt-1 text-xs text-red-500'>{error}</p>
      ) : null}
    </div>
  );
};

export default InputGroup;
