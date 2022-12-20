import instance from './api';

export const findAction = () => {
  return instance.get('/api/products');
};

export const findOneAction = (id) => {
  return instance.get(`/api/products/${id}?populate=*`);
};

export const createAction = (body) => {
  return instance.post('/api/products', body);
};

export const updateAction = (id, body) => {
  return instance.put(`/api/products/${id}`, body);
};

export const deleteAction = (id) => {
  return instance.delete(`/api/products/${id}`);
};