import { FC } from 'react'
import styles from './index.module.scss';

const Footer: FC = () => {
  return (
    <footer className={ styles.footer }>
      <p className={ styles.label }>Choose currency: </p>
      <select name="selectedCurrency" className={ styles.select}>
        <option value="USD">USD</option>
        <option value="RUB">RUB</option>
        <option value="EUR">EUR</option>
      </select>
    </footer>
  )
}

export default Footer;