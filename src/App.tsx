import { Route, Routes } from 'react-router-dom';
import './App.css';
import Movies from './pages/movies/Movies';
import TvShows from './pages/tvShows/TvShows';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/queryClient';
import Details from './pages/details/Details';
import Layout from './utils/Layout';

export interface IApp {}

const App: React.FC<IApp> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes>
          <Route path='/*' element={<TvShows />} />
          <Route path='/tvshows' element={<TvShows />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:id' element={<Details />} />
          <Route path='/tvshows/:id' element={<Details />} />
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
