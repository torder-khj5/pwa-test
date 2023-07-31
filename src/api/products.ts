import axios from 'axios';

export const requestProductLists = async () => {
  return await axios.get('/products');
};
