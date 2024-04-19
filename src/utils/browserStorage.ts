export const getLocalStorage = (key: string) =>
  JSON.parse(window.localStorage.getItem(key) as string)

export const setLocalStorage = (key: string, value: any) =>
  window.localStorage.setItem(key, JSON.stringify(value))

export const getSessionStorage = (key: string) =>
  JSON.parse(window.sessionStorage.getItem(key) as string)

export const setSessionStorage = (key: string, value: any) =>
  window.sessionStorage.setItem(key, JSON.stringify(value))
