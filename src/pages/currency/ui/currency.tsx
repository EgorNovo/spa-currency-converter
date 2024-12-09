import { FC, useContext, useEffect } from 'react';
import { UserContext } from 'src/app/context/context';
import ExchangeRateComponent from '../../../shared/ui/ExchangeRateComponent/ExchangeRateComponent'

import styles from './index.module.scss'

const Currency: FC = () => {
  const { currency, setCurrency, data } = useContext(UserContext)

  return (
    <div className = { styles.relative}>
      <div className={ styles.cardLine }></div>
      <div className={styles.currencyRow}>
      { data && Object.entries(data).map( (item, index) => 
        <ExchangeRateComponent 
            key={index}
            baseCurrency={"USD"}
            targetCurrency={item[1].code}
            exchangeRate={item[1].value}  
          />
        )}
      </div>
    </div>
  )
}

export default Currency;