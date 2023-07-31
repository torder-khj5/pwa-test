import axios from 'axios';

export const requestEmailCert = async (email: string) => {
  return await axios.post('/cert', { email });
};
