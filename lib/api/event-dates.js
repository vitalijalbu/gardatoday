import instance from './api';

export const findAction = () => {
  return instance.get('/api/calendar-events');
};

export const findOneAction = (id) => {
  return instance.get(`/api/calendar-events/${id}`);
};

export const createAction = (body) => {
  return instance.post('/api/calendar-events', body);
};

export const deleteAction = (id) => {
  return instance.delete(`/api/calendar-events/${id}`);
};