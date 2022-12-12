import './SkeletonCards.css';

export interface ISkeletonCards {}

const SkeletonCards: React.FC<ISkeletonCards> = () => {
  return (
    <div className='skeleton_container'>
      {[...Array(10)].map((element, index) => (
        <div className='card_container' key={index}>
          <div className='image_container'></div>
          <div className='title_container'></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCards;
