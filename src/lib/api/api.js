import axios from 'axios';

if (typeof window !== 'undefined') {
const token = localStorage.getItem('token') ?? '';
//console.log('✅ localStorage token', token);
}
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_DEMO_TOKEN
  },
});
 


export const setSession = (token) => {
  localStorage.setItem('token', token);
  //instance.defaults.headers['Authorization'] = 'Bearer ' + token;
};

export const getSession = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if(token !== 'undefined' || token !== 'null'){
      return true;
    }else{
      return false;
    }
    //console.log('✅ localStorage token', token);
    }
};

export const removeSession = () => {
  localStorage.removeItem('token');
  //delete instance.defaults.headers['Authorization'];
};
/*
if (localStorage.getItem('auth_token')) {
  instance.defaults.headers['Authorization'] =
    'Bearer ' + localStorage.getItem('auth_token');
}

const isValidResponse = (res) => {
  return typeof res !== 'string';
};

instance.interceptors.response.use(
  (response) => {
    if (response.data.success === false || response.data.error === true) {
      return Promise.reject(response.data);
    }
    // TODO: Remove when it will be fixed in backend
    if (!isValidResponse(response.data)) {
      return Promise.reject({
        success: false,
        message: 'Response is invalid!!',
      });
    }
    return response;
  },
  (error) => {
    return Promise.reject(error?.response?.data);
  }
);

export const setInstanceHeader = (name, value) => {
  instance.defaults.headers[name] = value;
};
*/
export default instance;