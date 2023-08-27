import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FormComponent } from '../FormComponent';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe('FormComponent', () => {
  it('should display validation errors when fields are empty', () => {
    render(
      <Provider store={store}>
        <FormComponent />
      </Provider>
    );

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    expect(screen.getByText('First name is required')).toBeInTheDocument();
  });
});
