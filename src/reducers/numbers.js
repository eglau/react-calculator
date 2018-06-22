const numbers = (state = [], action) => {
  switch (action.type) {
    case 'NUMBER':
      return [...state, action.number];
    default:
      return state;
  }
}

export default numbers;