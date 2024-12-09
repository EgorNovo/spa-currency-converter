type currencyApi = {
  "code": string;
  "value": number;
}
type currenciesApiRes = {
  "EUR": currencyApi;
  "RUB": currencyApi;
  "USD": currencyApi;
  "GBP": currencyApi;
}

const handleResponse = (res:any):currenciesApiRes|undefined => {
  if (res.ok) return res.json();
}
export function getCurrency() {
  const requestUrl = `https://api.currencyapi.com/v3/latest?apikey=cur_live_EVD2OMva6PlvtxuGvT23EswXPkKu1JskR0oWOQ24&currencies=EUR%2CUSD%2CRUB%2CGBP`

  return fetch(requestUrl)
    .then(res => res.json())
    .then( data => {
      console.log(data.data)
      return data.data
})
    .catch( err => console.log(err))
}
