import './Button.css';

interface ButtonProps {
  title: string
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return <div className='button'>{title}</div>;
};

export default Button;
