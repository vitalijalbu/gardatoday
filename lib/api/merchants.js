import instance from './api';

export const findAction = () => {
  return instance.get('/api/users?populate=*');
};

export const findOneAction = (id) => {
  return instance.get(`/api/users/${id}?populate=*`);
};

export const createAction = (body) => {
  return instance.post('/api/companies', body);
};

export const updateAction = (id, body) => {
  return instance.put(`/api/companies/${id}`, body);
};

export const deleteAction = (id) => {
  return instance.delete(`/api/companies/${id}`);
};