import React, { useState, FC } from 'react';
import { useAppDispatch } from '../app/hooks';

import { SubmitButton } from './SubmitButton';
import { InputField } from './InputField';

import { ValidationErrors, validateForm } from './validator';
import { FormData, formActions } from '../app/formSlice';

import './FormComponent.css';

export const FormComponent: FC = () => {
  const dispatch = useAppDispatch();
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof FormData
  ) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleBlur = (field: keyof FormData) => {
    const validationErrors = validateForm({
      ...formData,
      [field]: formData[field],
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: validationErrors[field],
    }));
  };

  const handleSubmit = () => {
    const validationErrors = validateForm(formData);
    if (
      Object.keys(validationErrors).some(
        (key) => validationErrors[key as keyof ValidationErrors]
      )
    ) {
      setErrors(validationErrors);
      return;
    }
    dispatch(formActions.addUser(formData));
    alert('Success!');

    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='formComponent'>
      <InputField
        label='First Name'
        type='text'
        name='first_name'
        value={formData?.first_name}
        onChange={(e) => handleChange(e, 'first_name')}
        onBlur={handleBlur}
        error={errors.first_name}
      />
      <InputField
        label='Last Name'
        type='text'
        name='last_name'
        value={formData?.last_name}
        onChange={(e) => handleChange(e, 'last_name')}
        onBlur={handleBlur}
        error={errors.last_name}
      />
      <InputField
        label='E-mail'
        type='email'
        name='email'
        value={formData?.email}
        onChange={(e) => handleChange(e, 'email')}
        onBlur={handleBlur}
        error={errors.email}
      />
      <InputField
        label='Message'
        type='text'
        name='message'
        value={formData?.message}
        onChange={(e) => handleChange(e, 'message')}
        onBlur={handleBlur}
        error={errors.message}
      />
      <SubmitButton onClick={handleSubmit} />
    </div>
  );
};
