const operators = (state = null, action) => {
  switch (action.type) {
    case 'OPERATOR':
      return action.operator;
    default:
      return state;
  }
}

export default operators;