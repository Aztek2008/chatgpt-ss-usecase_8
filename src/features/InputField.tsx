import React, { FC, ChangeEvent } from 'react';

import './InputField.css';
import { FormData } from '../app/formSlice';

interface InputFieldProps {
  label: string;
  type: string;
  name: keyof FormData;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (field: keyof FormData) => void;
  error?: string;
}

export const InputField: FC<InputFieldProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div className='inputField'>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={() => onBlur(name)}
        className={error ? 'error' : ''}
      />
      {error && <span className='errorMessage'>{error}</span>}
    </div>
  );
};
