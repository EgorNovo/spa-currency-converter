import { FC } from 'react';
import links  from './data/data'
import Logo from '../assets/Logo/Logo'
import Link from './ui/Link'

const Header: FC = () => {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          {links.map( link => <Link path={link.path} title={link.title}/>)}
        </ul>
      </nav>
    </header>
  )
};

export default Header;