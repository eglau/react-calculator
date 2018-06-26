import input from './input';

// Initialize display
describe('Display Reducer', () => {
  it('should handle initial state', () => {
    expect(input(undefined, {})).toEqual([]);
  })
});

// Add to display
describe('Display Reducer', () => {
  let payload = { type: 'UPDATE_DISPLAY', value: 1 };

  it('should handle UPDATE_DISPLAY for initial state', () => {
    expect(input([], { type: 'UPDATE_DISPLAY', value: 1 })).toEqual([1]);
    expect(input([], { type: 'UPDATE_DISPLAY', value: '+' })).toEqual([]);
  });
  it('should handle UPDATE_DISPLAY to append numbers together', () => {
    expect(input([1], { type: 'UPDATE_DISPLAY', value: 2 })).toEqual([12]);
    expect(input([0], { type: 'UPDATE_DISPLAY', value: 3 })).toEqual([3]);
    expect(input([1, '+', 2], { type: 'UPDATE_DISPLAY', value: 3 })).toEqual([1, '+', 23]);
  });
  it('should handle UPDATE_DISPLAY to push operators and numbers separately', () => {
    expect(input([1], { type: 'UPDATE_DISPLAY', value: '+' })).toEqual([1, '+']);
    expect(input([1, '+'], { type: 'UPDATE_DISPLAY', value: 2 })).toEqual([1, '+', 2]);
  });
  it('should handle UPDATE_DISPLAY to prevent two operators in a row', () => {
    expect(input(['+'], { type: 'UPDATE_DISPLAY', value: '-' })).toEqual(['+']);
    expect(input(['X'], { type: 'UPDATE_DISPLAY', value: '/' })).toEqual(['X']);
  });
});

// Clear display
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

// Calculate display
describe('Display Reducer', () => {
  const payload = {
    type: 'UPDATE_DISPLAY',
    value: '='
  };
  it('should handle UPDATE_DISPLAY to perform addition', () => {
    expect(input([1, '+', 2], payload)).toEqual([3]);
    expect(input([1, '+', 2, '+', 3], payload)).toEqual([6]);
    expect(input([1, '+', 0, '+', 3], payload)).toEqual([4]);
  });
  it('should handle UPDATE_DISPLAY to perform subtraction', () => {
    expect(input([2, '-', 1], payload)).toEqual([1]);
    expect(input([1, '-', 2, '-', 3], payload)).toEqual([-4]);
    expect(input([0, '-', 1], payload)).toEqual([-1]);
  });
  it('should handle UPDATE_DISPLAY to perform multiplication', () => {
    expect(input([2, 'X', 1], payload)).toEqual([2]);
    expect(input([1, 'X', 2, 'X', 3], payload)).toEqual([6]);
    expect(input([0, 'X', 1], payload)).toEqual([0]);
  });
  it('should handle UPDATE_DISPLAY to perform division', () => {
    expect(input([2, '/', 1], payload)).toEqual([2]);
    expect(input([0, '/', 1], payload)).toEqual([0]);
  });
});
