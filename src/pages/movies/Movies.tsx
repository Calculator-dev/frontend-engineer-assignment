import './Movies.css';
import Card from '../../components/groups/Card/Card';
import fetchMovies from '../../api/services/fetchMovies';
import { useQuery } from '@tanstack/react-query';
import { RootState, useAppDispatch } from '../../store';
import { setToggle, setShowButton } from '../../features/NavigationsSlice';
import { useNavigate } from 'react-router';
import fetchSearch from '../../api/services/fetchSearch';
import { useSelector } from 'react-redux';

export interface IMovies {}

const Movies: React.FC<IMovies> = () => {
  const toggle = useSelector((state: RootState) => state.toggle);
  const search = useSelector((state: RootState) => state.search);
  const { data, isFetching, isLoading, isError } = useQuery(
    ['movies_data'],
    fetchMovies,
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data: fetchedMovies } = useQuery(
    ['fetched_movies', search],
    async () => fetchSearch(toggle, search),
  );
  console.log(search);

  if (isFetching || isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return (
      <p className='error'>Error with fetching data, please try again later</p>
    );
  }

  const firstTenMovies = data?.results.slice(0, 10);
  const fetchedTenMovies = fetchedMovies?.results.slice(0, 10);

  const toggleMovieDetails = (id: number) => {
    navigate(`/movies/${id}`);
    dispatch(setToggle('movie'));
    dispatch(setShowButton(true));
  };

  return (
    /* eslint-disable @typescript-eslint/indent */
    <div className='movie-container'>
      {search.length > 2
        ? fetchedTenMovies?.map((item, index) => {
            return (
              <Card
                onClick={() => toggleMovieDetails(item?.id)}
                key={index}
                id={item?.id}
                title={item?.original_title}
                backdrop_path={item?.backdrop_path}
              />
            );
          })
        : firstTenMovies?.map((item, index) => {
            return (
              <Card
                onClick={() => toggleMovieDetails(item?.id)}
                key={index}
                id={item?.id}
                title={item?.title}
                backdrop_path={item?.backdrop_path}
              />
            );
          })}
    </div>
  );
};

// firstTenMovies?.map((item, index) => {
//   return (
//     <Card
//       onClick={() => toggleMovieDetails(item?.id)}
//       key={index}
//       id={item?.id}
//       title={item?.title}
//       backdrop_path={item?.backdrop_path}
//     />
//   );
// })

export default Movies;
