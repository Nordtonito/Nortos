export default (state = {}, action) => {
  switch (action.type) {
    case 'INC':
      return Object.assign({}, state, { value: state.value + 1 });
    case 'DEC':
      return Object.assign({}, state, { value: state.value - 1 });
    default:
      return state;
  }
};
