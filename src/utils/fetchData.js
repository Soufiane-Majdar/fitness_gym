import axios from 'axios';

const fetchData = async (url, host, options = {}) => {
  const config = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c0117c0e52msh93df1283bcfe3a9p19fe3ajsn207cf3fde547',
      'X-RapidAPI-Host': host,
    },
    ...options,
  };

  const { data } = await axios(url, config);

  return data;
};

export { fetchData };
