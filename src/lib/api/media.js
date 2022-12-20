import axios from 'axios';

export const uploadAction = (formData) => {
    return axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/upload`, formData,
    {headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_DEMO_TOKEN
    }});
};
