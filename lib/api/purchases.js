import instance from './api';

export const findAction = () => {
  return instance.get('/api/purchases?populate=*');
};

export const findOneAction = (id) => {
  return instance.get(`/api/purchases/${id}?populate=*`);
};

export const createAction = (body) => {
  return instance.post('/api/purchases', body);
};

export const updateAction = (id, body) => {
  return instance.put(`/api/purchases/${id}`, body);
};

export const deleteAction = (id) => {
  return instance.delete(`/api/purchases/${id}`);
};