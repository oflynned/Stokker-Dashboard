import axios from 'axios';
import { getLocalSession, hasSessionLocally } from '../session/sessionHelper';
import { authEndpoint } from './endpoints';

export const fetchAccount = async (email, password) => {
  return axios({
    method: 'POST',
    url: authEndpoint,
    data: {},
    headers: {
      authorization: `Basic ${btoa(email + ':' + password)}`
    }
  });
};

export const fetchApi = async (method, url, data = {}) => {
  const headers = hasSessionLocally() ? { 'x-session-id': getLocalSession() } : {};
  const payload = {
    method,
    url,
    data,
    headers
  };
  return axios(payload);
};

const fetchGraphQL = async query => fetch();
