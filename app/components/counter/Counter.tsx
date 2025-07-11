import React, { FC } from 'react';
import { CounterProps } from './PropTypes';
import StyledCounter from './counter.styled';

 const counterValue = (counter: number, maxDigits:number) => {
// Get the length of the counter value.
  const counterLength = Math.abs(counter).toString().length;
        // Counter length is less than or equal to the digits then return counter else 
      return counterLength <= maxDigits ? counter.toString() : (counter < 0 ? '-' : '') + '9'.repeat(maxDigits) + '+';
    }

const Counter: FC<CounterProps> = ({count= 0, size="XS", color="Primary", kind="fill" , maxDigits= 3} ) => {
const displayValue = counterValue(count, maxDigits);
  return (
   <StyledCounter size={size} color={color} kind={kind} count={count} maxDigits={maxDigits}>
    <span id="counter">{displayValue}</span>
   </StyledCounter>
  )
}

export default Counter