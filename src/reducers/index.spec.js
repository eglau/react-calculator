import input from './input';

describe('Display Reducer', () => {
  it('should handle initial state', () => {
    expect(input(undefined, {})).toEqual([]);
  })
});

describe('Display Reducer', () => {
  const payload = {
    type: 'UPDATE_DISPLAY',
    value: 1
  };

  it('should handle UPDATE_DISPLAY for initial state', () => {
    expect(input(undefined, payload)).toEqual([1]);
  });
  it('should handle UPDATE_DISPLAY for existing state', () => {
    expect(input([1], payload)).toEqual([1, 1]);
  });
});

describe('Display Reducer', () => {
  const payload = {
    type: 'UPDATE_DISPLAY',
    value: 'CLEAR'
  }
  it('should handle UPDATE_DISPLAY to clear the display', () => {
    expect(input([1, 2, 3], payload)).toEqual([]);
  });
  it('should handle UPDATE_DISPLAY to clear the display on initial state', () => {
    expect(input(undefined, payload)).toEqual([]);
  });
});