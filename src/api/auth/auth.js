import axios from 'axios';

const baseUrl = 'http://login.smarfac.com';
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};
export const login = async params => {
  try {
    const response = await axios.post(
      baseUrl + '/connect/token',
      params,
      config,
    );
    return response;
  } catch (error) {
    return error;
  }
};
