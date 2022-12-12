import { useState } from 'react';
import Button from '../components/common/Button/Button';
import { useNavigate } from 'react-router';
import './Navigation.css';
import { RootState, useAppDispatch } from '../store';
import {
  setSearch,
  setShowButton,
  setToggle,
} from '../features/NavigationsSlice';
import { useDebounce } from './useDebounce';
import { useSelector } from 'react-redux';

export interface INavigation {}

interface State {
  activeButton: 1 | 2;
}

const Navigation: React.FC<INavigation> = () => {
  const [activeButton, setActiveButton] = useState<State['activeButton']>(1);
  const showButton = useSelector((state: RootState) => state.showButton);
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const MoviesButton = () => {
    setActiveButton(2);
    navigate('/movies');
    dispatch(setToggle('movie'));
  };

  const TvShowsButton = () => {
    setActiveButton(1);
    navigate('/tvshows');
    dispatch(setToggle('tv'));
  };

  const debounceSearch = useDebounce(query, 1000);

  const searchMovie = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  if (query.length > 2) {
    dispatch(setSearch(debounceSearch));
  } else {
    dispatch(setSearch(''));
  }

  return (
    /* eslint-disable multiline-ternary */
    <div className='navigation'>
      {!showButton ? (
        <div className='buttons'>
          <Button
            activeButton={activeButton === 1}
            onClick={MoviesButton}
            title='MOVIES'
          />
          <Button
            activeButton={activeButton === 2}
            onClick={TvShowsButton}
            title='TV SHOWS'
          />
        </div>
      ) : (
        <Button
          title='BACK'
          onClick={() => {
            navigate(-1);
            dispatch(setShowButton(false));
          }}
          activeButton
        ></Button>
      )}
      <div>
        <input
          type='search'
          className='input'
          placeholder='Search...'
          value={query}
          onChange={searchMovie}
        />
      </div>
    </div>
  );
};

export default Navigation;
