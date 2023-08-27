import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FormComponent } from '../FormComponent';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe('FormComponent + Redux Store Integration', () => {
  it('should update the store on form submission', async () => {
    render(
      <Provider store={store}>
        <FormComponent />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText('First Name'), {
      target: { value: 'John' },
    });

    fireEvent.change(screen.getByLabelText('Last Name'), {
      target: { value: 'Doe' },
    });

    fireEvent.change(screen.getByLabelText('E-mail'), {
      target: { value: 'Doe@john.com' },
    });

    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'Doe@john.com is a good mail' },
    });

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    const state = store.getState();

    console.log('STATE', state);

    await waitFor(() => {
      expect(state.form.users[0].first_name).toBe('John');
    });
  });
});
