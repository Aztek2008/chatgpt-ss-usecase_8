interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}

export interface ValidationErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
  message?: string;
}

export const validateForm = (data: FormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!data?.first_name) {
    errors.first_name = 'First name is required';
  } else {
    errors.first_name = undefined;
  }

  if (!data?.last_name) {
    errors.last_name = 'Last name is required';
  } else {
    errors.last_name = undefined;
  }

  if (
    !data?.email ||
    !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(data?.email)
  ) {
    errors.email = 'Enter a valid email';
  } else {
    errors.email = undefined;
  }

  if (!data?.message || data.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  } else {
    errors.message = undefined;
  }

  return errors;
};
