import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import Movies from './pages/movies/Movies';
import TvShows from './pages/tvShows/TvShows';
import Layout from './utils/Layout';

export interface IApp {}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<TvShows />} />
      <Route path='/movies' element={<Movies />} />
    </Route>,
  ),
);

const App: React.FC<IApp> = () => {
  return <RouterProvider router={router} />;
};

export default App;
