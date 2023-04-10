import axios from 'axios';

const accessKey = '891cf53c-01fc-4d74-a14c-592668b7a03c';
export const clientID = '2c44d8c2-c89a-472e-aab3-9a8a29142315';
export const deviceID = '7db72635-fd0a-46b9-813b-1627e3aa02ea';
export const HOST = {
  token: 'http://84.201.188.117:5021',
  bonus: 'http://84.201.188.117:5003',
};

export const axiosClient = axios.create({
  timeout: 7000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    AccessKey: accessKey,
  },
  validateStatus: (status) => {
    return status >= 200 && status <= 299;
  },
});
