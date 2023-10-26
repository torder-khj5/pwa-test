import axios from 'axios';

export const requestInit = async () => {
  return await axios.get('/torder/goods/init');
};
