import { createContext } from 'react'

export type contextType = {
  currency: string,
  setCurrency?: (currency: string) => void,
  data?: {
    "EUR": {
      "code": string,
      "value": number
    },
    "GBP": {
      "code": string,
      "value": number
    },
    "RUB": {
      "code": string,
      "value": number
    },
    "USD": {
      "code": string,
      "value": number
    }
  } | {},
  setData?: (data:any) => void,
}

export const UserContext = createContext<contextType>(
  /* Данные по-умолчанию */
  { currency: 'RUB'}
);
