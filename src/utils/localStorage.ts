// import { env } from '../config/env'

export const readLocalStorage = (key: string) => {
  const itemStorage = localStorage.getItem(`@timer-task:${key}-1.0.0`)

  if (itemStorage) {
    return JSON.parse(itemStorage)
  }

  return null
}

export const writeLocalStorage = (key: string, value: any) => {
  localStorage.setItem(`@timer-task:${key}-1.0.0`, JSON.stringify(value))
}
