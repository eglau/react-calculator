import React from 'react';

import Button from './Button';
import ButtonContainer from '../containers/ButtonContainer';

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const OPERATORS = ['+', '-', 'X', '/', '='];

const Buttons = () => {
  return (
    <div id="buttons">
      <div id="operators">
        {
          OPERATORS.map((op, index) => {
            return (
              <ButtonContainer key={index} display={op} />
            );
          })
        }
      </div>
      <div id="numbers">
        {
          NUMBERS.map((num, index) => {
            return (
              <ButtonContainer key={index} display={num} />
            );
          })
        }
      </div>
      <ButtonContainer className="clearbutton" display={'CLEAR'} />
    </div>
  )
}

export default Buttons;