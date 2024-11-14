import { FC } from 'react';
import { Link } from 'react-router-dom'

type LinkProps = {
  path: string;
  title: string;
}

const LinkComponent: FC<LinkProps> = ( { path, title }:LinkProps ) => {
  return (
    <Link to = {path}>{title}</Link>
  )
};

export default LinkComponent;