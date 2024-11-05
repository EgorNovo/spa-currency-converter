import { FC } from 'react';

type LinkProps = {
  path?: string;
  title: string;
}
const Link: FC<LinkProps> = ( { path, title }:LinkProps ) => {
  return (
    <a href = {path}>{title}</a>
  )
};

export default Link;