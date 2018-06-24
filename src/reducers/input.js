const input = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_DISPLAY':
      if (action.value !== 'CLEAR') {
        return [...state, action.value];
      } else {
        return [];
      }
    default:
      return state;
  }
}

export default input;