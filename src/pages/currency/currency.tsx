import { FC } from 'react';
import ExchangeRateComponent from '../../shared/ui/ExchangeRateComponent/ExchangeRateComponent'

import styles from './index.module.scss'

const DATA = [{
  baseCurrency: 'USD',
  targetCurrency: 'EUR',
  exchangeRate: 0.85
},
{
  baseCurrency: 'USD',
  targetCurrency: 'RUB',
  exchangeRate: 70
},
{
  baseCurrency: 'USD',
  targetCurrency: 'GBR',
  exchangeRate: 0.8
}]

const Currency: FC = () => {
  return (
    <div>
      <h2>Exchange rate</h2>
      <div className={styles.currencyRow}>
        {DATA.map( (data, index) => 
        <ExchangeRateComponent 
            key={index}
            baseCurrency={data.baseCurrency}
            targetCurrency={data.targetCurrency}
            exchangeRate={data.exchangeRate}  
          />
        )}
      </div>
    </div>
  )
}

export default Currency;