import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './index.module.scss';

type LinkProps = {
  path: string;
  title: string;
}

const LinkComponent: FC<LinkProps> = ( { path, title }:LinkProps ) => {
  return (
    <NavLink 
      to = {path} 
      className={ styles.link } 
    >{title}</NavLink>
  )
};

export default LinkComponent;