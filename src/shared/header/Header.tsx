import { FC, useEffect } from 'react';
import links  from './data/data'
import Logo from '../assets/Logo/Logo'
import LinkComponent from './model/Link'
import styles from './index.module.scss';
import { useLocation } from 'react-router';

const Header: FC = () => {

  return (
    <header className={ styles.header }>
      <Logo width='42px' height='42px'/>
      <nav >
        <ul className={ styles.list }>
          {links.map( (link, index ) =>
            <li key={index} >
             <LinkComponent 
                path={link.path} 
                title={link.title}
              />
            </li>)}
        </ul>
      </nav>
    </header>
  )
};

export default Header;