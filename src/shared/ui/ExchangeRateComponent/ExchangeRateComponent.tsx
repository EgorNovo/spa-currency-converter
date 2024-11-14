import { FC } from 'react'
import styles from './index.module.scss'

type ExchangeRateComponentProps = {
  baseCurrency: string;
  targetCurrency: string;
  exchangeRate: number;
}

const ExchangeRateComponent: FC<ExchangeRateComponentProps> = ({
  baseCurrency, 
  targetCurrency,
  exchangeRate
}: ExchangeRateComponentProps) => {
  return (
    <div>
      <ul className={styles.list}>
        <li>
          Base currency: {baseCurrency}
        </li>
        <li>
          Target currency: {targetCurrency}
        </li>
        <li>
          Exchange rate: {exchangeRate} 
        </li>
      </ul>
    </div>
  )
}

export default ExchangeRateComponent;