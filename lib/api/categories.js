import instance from './api';

export const findAction = () => {
  return instance.get('/api/categories?sort=updatedAt:desc');
};

export const findOneAction = (id) => {
  return instance.get(`/api/categories/${id}`);
};

export const createAction = (body) => {
  return instance.post('/api/categories', body);
};

export const updateAction = (id, body) => {
  return instance.put(`/api/categories/${id}`, body);
};

export const deleteAction = (id) => {
  return instance.delete(`/api/categories/${id}`);
};