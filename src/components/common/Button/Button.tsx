import './Button.css';

interface ButtonProps {
  title: string;
  activeButton: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ title, activeButton, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        activeButton ? 'active shrink-on-hover' : 'button shrink-on-hover'
      }
    >
      {title}
    </button>
  );
};

export default Button;
