import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { FormData } from '../app/formSlice';

export const List: FC = () => {
  const users = useSelector(
    (state: { form: { users: FormData[] } }) => state.form.users
  );

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h2>
            {user.first_name} {user.last_name}
          </h2>
          <p>Email: {user.email}</p>
          <p>Message: {user.message}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};
