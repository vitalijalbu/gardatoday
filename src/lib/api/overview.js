import instance from './api';

export const findOverview = () => {
  return instance.get('/api/overview');
};

export const findOneAction = (id) => {
  return instance.get(`/api/events/${id}`);
};

export const createAction = (body) => {
  return instance.post('/api/events', body);
};

export const updateAction = (id, body) => {
  return instance.put(`/api/events/${id}`, body);
};

export const deleteAction = (id) => {
  return instance.delete(`/api/events/${id}`);
};