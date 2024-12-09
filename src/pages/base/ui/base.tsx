import { FC, useState, useContext, useEffect } from 'react';
import {} from '../../../app/app'
import styles from './index.module.scss'
import { UserContext } from 'src/app/context/context';
import Chip from '../../../shared/assets/Chip/Chip'
import Nfc from '../../../shared/assets/Nfc/Nfc'
import { getCurrency } from '../api/currencyValue'


const Base: FC = () => {
  let { currency, setCurrency, data, setData } = useContext(UserContext)

  function handlerChange(currency:string) {
      setCurrency(currency)
  }

  useEffect(()=> {
    async function tokenList() {
      const info = await getCurrency(); 
      if (info) setData(info)
    }
    tokenList()
    console.log(data)
  }, [currency])

  return (
    <div className = { styles.base }>
      <div className = { styles.iconRow}>
        <Chip width='48px' height='48px'/>
        <Nfc  width='48px' height='48px'/>
      </div>
      <h2>Your current currency is <span>{currency}</span></h2>
      <p className={ styles.label }>Choose target currency: </p>
      <select name="selectedCurrency" 
        className={ styles.select} 
        onChange={(e) => { if(e.target.value) { handlerChange(e.target.value) } } }
        value={currency}
      >
        <option value="USD">USD</option>
        <option value="RUB">RUB</option>
        <option value="EUR">EUR</option>
        <option value="EUR">GBP</option>
      </select>
    </div>
  )
}

export default Base;