export function validateMessage(string) {
  let data = JSON.parse(localStorage.getItem(string));
  return !data ? [] : data;
}

export function validateData(string) {
  let data = JSON.parse(localStorage.getItem(string));
  return !data ? null : data;
}
