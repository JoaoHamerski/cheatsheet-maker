export const hasSpecialChars = (str: string): boolean =>
  str === '' ? false : !/^[a-zA-Z0-9\s]+$/.test(str)
