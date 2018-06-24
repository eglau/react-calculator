export const pressButton = (value) => {
  return {
    type: 'PRESS_BUTTON',
    value
  };
};

export const updateDisplay = (value) => {
  return {
    type: 'UPDATE_DISPLAY',
    value
  };
};