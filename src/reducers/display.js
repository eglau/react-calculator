const display = (state = 'Calculator!', action) => {
  switch (action.type) {
    case 'UPDATE_DISPLAY':
      return action.text;
    default:
      return state;
  }
}

export default display;