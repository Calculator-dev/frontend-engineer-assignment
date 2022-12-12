/* eslint-disable multiline-ternary */
import './Card.css';
import NoData from '../../../assets/NoData.jpg';

export interface ICard {
  id: number;
  title: string;
  backdrop_path?: string;
  second_title?: string;
  onClick: React.MouseEventHandler<HTMLInputElement>;
}

const Card: React.FC<ICard> = ({
  onClick,
  title,
  backdrop_path,
  second_title,
}) => {
  const imgURL: string | undefined = process.env.REACT_APP_IMG_URL;

  return (
    <div onClick={onClick} className='card-container'>
      <div className='image-container '>
        {backdrop_path !== null ? (
          <img
            className='image '
            src={`${imgURL}${backdrop_path}`}
            alt={backdrop_path}
          />
        ) : (
          <img className='image' src={NoData} alt='no_data' />
        )}
      </div>
      <h2 className='title'>
        {title}
        {second_title}
      </h2>
    </div>
  );
};

export default Card;
