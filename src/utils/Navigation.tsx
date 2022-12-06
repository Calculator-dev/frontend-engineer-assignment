import Button from '../components/common/Button/Button';
import './Navigation.css';

export interface INavigation {}

const Navigation: React.FC<INavigation> = () => {
  return (
    <div className='navigation'>
      <Button title='Movies' />
      <Button title='Tv Shows' />
    </div>
  );
};

export default Navigation;
