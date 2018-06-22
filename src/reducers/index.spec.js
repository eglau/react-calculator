import numbers from './numbers';
import operators from './operators';
import display from './display';

describe('Numbers Reducer', () => {
  it('should handle initial state', () => {
    expect(numbers(undefined, {})).toEqual([]);
  });

  const payload = {
    type: 'NUMBER',
    number: 1
  };
  it('should handle NUMBER action for initial state', () => {
    expect(numbers(undefined, payload)).toEqual([1]);
  });
  it('should handle NUMBER action for existing state', () => {
    expect(numbers([2], payload)).toEqual([2, 1]);
  });
});

describe('Operators Reducer', () => {
  it('should handle initial state', () => {
    expect(operators(undefined, {})).toEqual(null);
  });

  const payload = {
    type: 'OPERATOR',
    operator: '+'
  }
  it('should handle OPERATOR action for intial state', () => {
    expect(operators(undefined, payload)).toEqual('+');
  });
  it('should handle OPERATOR action for existing state', () => {
    expect(operators('-', payload)).toEqual('+');
  })
});

describe('Display Reducer', () => {
  it('should handle initial state', () => {
    expect(display(undefined, {})).toEqual('Calculator!');
  })
  const payload = {
    type: 'UPDATE_DISPLAY',
    text: 'Hello!'
  };
  it('should handle UPDATE_DISPLAY for initial state', () => {
    expect(display(undefined, payload)).toEqual('Hello!');
  });
  it('should handle UPDATE_DISPLAY for existing state', () => {
    expect(display('update_me', payload)).toEqual('Hello!');
  });
  it('should handle UPDATE_DISPLAY to clear the display', () => {
    expect(display('update_me', { type: 'UPDATE_DISPLAY', text: '' })).toEqual('');
  });
});