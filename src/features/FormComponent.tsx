import React, { useState, ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';

import { SubmitButton } from './SubmitButton';
import { InputField } from './InputField';

import { ValidationErrors, validateForm } from './validator';
import { formActions } from '../app/formSlice';

import './FormComponent.css';

export const FormComponent: FC = () => {
  const dispatch = useAppDispatch();
  const [errors, setErrors] = useState<ValidationErrors>({});

  const formData = useAppSelector((state) => state.form);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof typeof formData
  ) => {
    dispatch(formActions.updateField({ field, value: e.target.value }));

    const updatedFormData = {
      ...formData,
      [field]: e.target.value,
    };
    const validationErrors = validateForm(updatedFormData);

    setErrors(validationErrors);
  };

  const handleBlur = (field: keyof typeof formData) => {
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

    alert('Success!');
    console.log(formData);
  };

  return (
    <div className='formComponent'>
      <InputField
        label='First Name'
        type='text'
        value={formData?.first_name}
        onChange={(e) => handleChange(e, 'first_name')}
        onBlur={() => handleBlur('first_name')}
        error={errors.first_name}
      />
      <InputField
        label='Last Name'
        type='text'
        value={formData?.last_name}
        onChange={(e) => handleChange(e, 'last_name')}
        onBlur={() => handleBlur('first_name')}
        error={errors.last_name}
      />
      <InputField
        label='E-mail'
        type='email'
        value={formData?.email}
        onChange={(e) => handleChange(e, 'email')}
        onBlur={() => handleBlur('first_name')}
        error={errors.email}
      />
      <InputField
        label='Message'
        type='text'
        value={formData?.message}
        onChange={(e) => handleChange(e, 'message')}
        onBlur={() => handleBlur('first_name')}
        error={errors.message}
      />
      <SubmitButton onClick={handleSubmit} />
    </div>
  );
};
