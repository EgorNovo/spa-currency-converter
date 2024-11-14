import { FC } from 'react';
import Header from '../../shared/header/Header'
import Footer from '../../shared/footer/Footer'
import { Outlet } from 'react-router';
import styles from './index.module.scss';

const Layout: FC = () => {
  return (
    <div className={ styles.layout }>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;