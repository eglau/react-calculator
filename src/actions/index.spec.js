import * as actions from './index';

describe('Number press', () => {
  it('should create NUMBER action', () => {
    expect(actions.pressNumber('9')).toEqual({
      type: 'NUMBER',
      number: '9'
    });
  });
});

describe('Operator press', () => {
  it('should create OPERATOR action', () => {
    expect(actions.pressOperator('+')).toEqual({
      type: 'OPERATOR',
      operator: '+'
    });
  });
});

describe('Display update', () => {
  it('should create UPDATE_DISPLAY action', () => {
    expect(actions.updateDisplay('1337')).toEqual({
      type: 'UPDATE_DISPLAY',
      text: '1337'
    });
  });
});
