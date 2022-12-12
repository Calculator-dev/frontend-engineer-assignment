import axios from 'axios';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL ?? 'default';

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY ?? 'default';

interface Data {
  page: number;
  results: [
    {
      id: number;
      original_title: string;
      original_name: string;
      overview: string;
      backdrop_path?: string;
    },
  ];
  total_pages: number;
  total_results: number;
}

const fetchSearch = async (toggle: string, search: string): Promise<Data> => {
  const response = await axios.get(
    `${REACT_APP_API_URL}search/${toggle}?api_key=${REACT_APP_API_KEY}&query=${search}`,
  );
  return response.data;
};

export default fetchSearch;
