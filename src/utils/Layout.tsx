import { Outlet } from 'react-router';
import Navigation from './Navigation';
import './Layout.css';

export interface ILayout {}

const Layout: React.FC<ILayout> = () => {
  return (
    <div className='layout'>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
