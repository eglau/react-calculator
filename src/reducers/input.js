const calculateResult = (arr) => {
  // Balanced equation must have an odd number of variables
  if (arr.length % 2 === 0) {
    return input;
  }
  let result = arr.shift();
  while (arr.length > 0) {
    let operator = arr.shift();
    let rhs = arr.shift();

    if (operator === '+') {
      result += rhs;
    } else if (operator === '-') {
      result -= rhs;
    } else if (operator === 'X') {
      result *= rhs;
    } else {
      result /= rhs;
    }
  }
  return [result];
}

const updateInput = (input, value) => {
  // Do not push value if it is an operator and there is no LHS number
  if (input.length === 0 && isNaN(value)) {
    return input;
  }

  const tail = input[input.length - 1];
  if (!isNaN(tail) && !isNaN(value)) {
    // Append two numbers
    input[input.length - 1] = parseInt('' + tail + value);
    return input;
  } else if (isNaN(tail) && isNaN(value)) {
    // Prevent two operators next to each other
    return input;
  }
  // Push value to array
  return [...input, value];
}

const input = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_DISPLAY':
      switch (action.value) {
        case 'CLEAR':
          return [];
        case '=':
          return calculateResult(state);
        default:
          return updateInput(state, action.value);
      }
    default:
      return state;
  }
}

export default input;