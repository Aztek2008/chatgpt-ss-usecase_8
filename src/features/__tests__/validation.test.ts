import { validateForm } from './../validator';

describe('validateForm', () => {
  it('should return errors for empty fields', () => {
    const formData = {
      first_name: '',
      last_name: '',
      email: '',
      message: '',
    };

    const errors = validateForm(formData);
    expect(errors.first_name).toBeTruthy();
    expect(errors.last_name).toBeTruthy();
    expect(errors.email).toBeTruthy();
    expect(errors.message).toBeTruthy();
  });

  it('should validate email format', () => {
    const formData = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe',
      message: 'Hello world!',
    };

    const errors = validateForm(formData);
    expect(errors.email).toBeTruthy();
  });
});
