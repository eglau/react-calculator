export const pressNumber = (number) => {
  return {
    type: 'NUMBER',
    number
  };
};

export const pressOperator = (operator) => {
  return {
    type: 'OPERATOR',
    operator
  };
};

export const updateDisplay = (text) => {
  return {
    type: 'UPDATE_DISPLAY',
    text
  };
};