import instance from './api';

export const findAction = () => {
  return instance.get('/api/deals?populate=*');
};
/*
export const findOneAction = (id) => {
  return instance.get(`/api/deals/${id}`);
};

export const createAction = (body) => {
  return instance.post('/api/deals', body);
};

export const updateAction = (id, body) => {
  return instance.put(`/api/deals/${id}`, body);
};

export const deleteAction = (id) => {
  return instance.delete(`/api/deals/${id}`);
};
*/