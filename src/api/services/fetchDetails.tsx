import axios from 'axios';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL ?? 'default';

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY ?? 'default';

interface Data {
  original_name: string;
  id: number;
  original_title: string;
  overview: string;
  backdrop_path: string;
  videos?: {
    results: Array<{ key: string }>;
  };
}

const fetchDetails = async (toggle: string, id?: string): Promise<Data> => {
  const response = await axios.get(
    `${REACT_APP_API_URL}${toggle}/${id}?api_key=${REACT_APP_API_KEY}&append_to_response=videos`,
  );
  return response.data;
};

export default fetchDetails;
