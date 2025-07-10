import React, { FC } from 'react';
import { CounterProps } from './PropTypes';
import StyledCounter from './counter.styled';


const Counter: FC<CounterProps> = ({count, size="XS"} ) => {
  return (
   <StyledCounter size={size}>{count}</StyledCounter>
  )
}

export default Counter