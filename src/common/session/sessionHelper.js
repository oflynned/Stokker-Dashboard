import { clearKeys, getKey, KEY_SESSION, saveKey } from './localCache';
import { fetchApi } from '../network/api';
import { authEndpoint } from '../network/endpoints';

// v4
const uuidRegex = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

export const hasSessionLocally = () => {
  try {
    const storedSession = getKey(KEY_SESSION);
    return storedSession && storedSession.toUpperCase()
      .match(uuidRegex);
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const getLocalSession = () => getKey(KEY_SESSION);

export const isSessionValid = () =>
  new Promise((resolve, reject) => {
    if (!hasSessionLocally()) {
      clearKeys();
      reject('no_local_session');
    }

    return fetchApi('GET', authEndpoint)
      .then(() => resolve())
      .catch(err => reject(err));
  });

export const storeNewSession = sessionId => {
  saveKey(KEY_SESSION, sessionId);
};
