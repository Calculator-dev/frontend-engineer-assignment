import Navigation from './Navigation';
import { ReactNode } from 'react';
import './Layout.css';

export interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className='layout'>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
