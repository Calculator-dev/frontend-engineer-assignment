import './Card.css';

export interface ICard {}

const Card: React.FC<ICard> = () => {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img />
      </div>
      <div className='title-container'>
        <p className='title'>Movie name</p>
      </div>
    </div>
  );
};

export default Card;
