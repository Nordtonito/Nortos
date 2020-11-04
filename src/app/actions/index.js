export function reserveAction(id) {
  return { type: 'RESERVE', id };
}

export function cancelAction(id) {
  return { type: 'CANCEL', id };
}

export function registerAction(user) {
  return { type: 'REGISTERING', user };
}
