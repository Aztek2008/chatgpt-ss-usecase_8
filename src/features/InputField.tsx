import React, { FC, ChangeEvent } from 'react';
import './InputField.css';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (field: keyof typeof FormData) => void;
  error?: string;
}

export const InputField: FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  error,
}) => {
  return (
    <div className='inputField'>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={error ? 'error' : ''}
      />
      {error && <span className='errorMessage'>{error}</span>}
    </div>
  );
};
