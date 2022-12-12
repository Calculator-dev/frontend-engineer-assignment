import axios from 'axios';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL ?? 'default';

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY ?? 'default';

interface Data {
  results: [
    {
      id: number;
      name: string;
      overview: string;
      backdrop_path: string;
    },
  ];
}

const fetchTVShows = async (): Promise<Data> => {
  const response = await axios.get(
    `${REACT_APP_API_URL}tv/top_rated?api_key=${REACT_APP_API_KEY}`,
  );
  return response.data;
};

export default fetchTVShows;
