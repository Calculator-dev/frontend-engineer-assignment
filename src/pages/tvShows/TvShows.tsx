import { useQuery } from '@tanstack/react-query';
import Card from '../../components/groups/Card/Card';
import './TvShows.css';
import fetchTVShows from '../../api/services/fetchTVShows';
import { setShowButton, setToggle } from '../../features/NavigationsSlice';
import { RootState, useAppDispatch } from '../../store';
import { useNavigate } from 'react-router';
import fetchSearch from '../../api/services/fetchSearch';
import { useSelector } from 'react-redux';

export interface ITvShows {}

const TvShows: React.FC<ITvShows> = () => {
  const toggle = useSelector((state: RootState) => state.toggle);
  const search = useSelector((state: RootState) => state.search);
  const { data, isLoading, isError } = useQuery(['tvshows_data'], fetchTVShows);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data: fetchedTvShows } = useQuery(
    ['fetched_movies', search],
    async () => fetchSearch(toggle, search),
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return (
      <p className='error'>Error with fetching data, please try again later</p>
    );
  }
  const firstTenTVShows = data?.results.slice(0, 10);
  const firstTenFetchedTvShows = fetchedTvShows?.results.slice(0, 10);
  const toggleTvShowsDetails = (id: number) => {
    navigate(`/tvshows/${id}`);
    dispatch(setToggle('tv'));
    dispatch(setShowButton(true));
  };
  return (
    /* eslint-disable @typescript-eslint/indent */
    <div className='tvshows-container'>
      {search.length > 2
        ? firstTenFetchedTvShows?.map((item, index) => {
            return (
              <Card
                onClick={() => toggleTvShowsDetails(item?.id)}
                key={index}
                id={item?.id}
                title={item?.original_name}
                second_title={item?.original_title}
                backdrop_path={item?.backdrop_path}
              />
            );
          })
        : firstTenTVShows?.map((item, index) => {
            return (
              <Card
                onClick={() => toggleTvShowsDetails(item?.id)}
                key={index}
                id={item?.id}
                title={item?.name}
                backdrop_path={item?.backdrop_path}
              />
            );
          })}
    </div>
  );
};

// {}

export default TvShows;
