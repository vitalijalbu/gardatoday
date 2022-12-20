import instance from './api';

export const findAction = () => {
  return instance.get(`/api/users?filters[role][id][$eq]=6&populate=*`);
};

export const findOneAction = (id) => {
  return instance.get(`/api/activities/${id}`);
};

export const createAction = (body) => {
  return instance.post('/api/activities', body);
};

export const updateAction = (id, body) => {
  return instance.put(`/api/activities/${id}`, body);
};

export const deleteAction = (id) => {
  return instance.delete(`/api/activities/${id}`);
};