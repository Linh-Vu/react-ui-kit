import React, { memo } from 'react';

interface Props extends React.ComponentProps<'input'> {

}

const Input: React.FC<Props> = (props) => {
  const { value } = props;

  console.log('call rerender');

  return <input value={value} readOnly />
};

export default Input;
