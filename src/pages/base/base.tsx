import { FC } from 'react';
import styles from './index.module.scss'

const currency = 'USD';

const Base: FC = () => {
  return (
    <div>
      <h2>Your current currency💵 is <span>{currency}</span></h2>
    </div>
  )
}

export default Base;