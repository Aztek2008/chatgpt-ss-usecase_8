import React from 'react';

import './App.css';
import { FormComponent } from './features/FormComponent';
import { List } from './features/List';

export const App = () => {
  return (
    <div className='App'>
      <FormComponent />
      <List />
    </div>
  );
};
