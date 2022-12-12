import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useQuery } from '@tanstack/react-query';
import './Details.css';
import { useParams } from 'react-router-dom';
import fetchDetails from '../../api/services/fetchDetails';
import NoData from '../../assets/NoData.jpg';

export interface IDetails {}

const Details: React.FC<IDetails> = () => {
  const toggle = useSelector((state: RootState) => state.toggle);
  const { id } = useParams<{ id?: string }>();

  const { data, isLoading, isError } = useQuery(['details'], async () =>
    fetchDetails(toggle, id),
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return (
      <p className='error'>Error with fetching data, please try again later</p>
    );
  }

  return (
    /* eslint-disable multiline-ternary */
    <div className='details_container'>
      <div className='image_container'>
        {data?.videos?.results[0]?.key != null ? (
          <iframe
            className='details-video'
            title='Youtube player'
            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
            src={`https://Youtube.com/embed/${data?.videos?.results[0]?.key}?autoplay=0`}
          />
        ) : (
          <img className='image' src={NoData} alt='no_data' />
        )}
      </div>
      <div className='title_container'>
        <h1 className='title'>
          {data?.original_title}
          {data?.original_name}
        </h1>
      </div>
      <div className='overview_container'>
        <p className='overview'>{data?.overview}</p>
      </div>
    </div>
  );
};

export default Details;
