export const pressButton = (value) => {
  return {
    type: 'PRESS_BUTTON',
    value
  };
};

export const updateDisplay = (text) => {
  return {
    type: 'UPDATE_DISPLAY',
    text
  };
};