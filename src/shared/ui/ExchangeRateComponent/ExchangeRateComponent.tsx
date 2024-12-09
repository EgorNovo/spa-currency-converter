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
        <li className={styles.item}>
          <span>Base cur:</span> <span>{baseCurrency}</span>
        </li>
        <li className={styles.item}>
          <span>Target cur:</span> <span>{targetCurrency}</span>
        </li>
        <li className={styles.item}>
          <span>Rate:</span> <span>{exchangeRate}</span>
        </li>
      </ul>
    </div>
  )
}

export default ExchangeRateComponent;