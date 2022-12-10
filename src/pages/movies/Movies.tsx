import './Movies.css';
import Card from '../../components/groups/Card/Card';

export interface IMovies {}

const Movies: React.FC<IMovies> = () => {
  return (
    <div className='movie-container'>
      {[...Array(10)].map((item, index) => {
        return <Card key={index} />;
      })}
    </div>
  );
};

export default Movies;
