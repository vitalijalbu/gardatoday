import instance from './api';

export const findAction = () => {
  return instance.get('/api/events?populate=*');
};

export const findOneAction = (id) => {
  return instance.get(`/api/events/${id}?populate=*`);
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