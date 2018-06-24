import * as actions from './index';

describe('Button press', () => {
  it('should create PRESS_BUTTON action', () => {
    expect(actions.pressButton('9')).toEqual({
      type: 'PRESS_BUTTON',
      value: '9'
    });
  });
});

describe('Display update', () => {
  it('should create UPDATE_DISPLAY action', () => {
    expect(actions.updateDisplay('X')).toEqual({
      type: 'UPDATE_DISPLAY',
      value: 'X'
    });
  });
});
