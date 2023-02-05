export const getFromLocalStorage = (key, value) => {
  return window.localStorage.setItem(key, JSON.stringify(value));
};

export const setToLocalStorage = (key, initialValue) => {
  return JSON.parse(window.localStorage.getItem(key)) ?? initialValue;
};
