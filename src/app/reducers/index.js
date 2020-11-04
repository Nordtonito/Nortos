export default (state = {}, action) => {
  switch (action.type) {
    case 'RESERVE':
      return {
        ...state,
        tables: [...state.tables].map((table) =>
          table.id === action.id ? { ...table, reserved: true } : table,
        ),
      };
    case 'CANCEL':
      return {
        ...state,
        tables: [...state.tables].map((table) =>
          table.id === action.id ? { ...table, reserved: false } : table,
        ),
      };
    case 'REGISTERING':
      return {
        ...state,
        users: state.users.find((user) => user.login === action.user.login)
          ? state.users
          : [...state.users, action.user],
      };
    default:
      return state;
  }
};
