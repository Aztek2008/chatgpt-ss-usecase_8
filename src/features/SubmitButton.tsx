import React, { FC } from 'react';

import './SubmitButton.css';

interface SubmitButtonProps {
  onClick: () => void;
}

export const SubmitButton: FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className='submitButton'>
      Submit
    </button>
  );
};
