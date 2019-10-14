import SecureLS from 'secure-ls';

const ls = new SecureLS({ encodingType: 'aes' });

const prefix = 'stacket_';

// session related keys
export const KEY_SESSION = 'session';

// user related keys
export const KEY_ID = '_id';
export const KEY_NAME = 'name';

export const saveKey = (key, value) => {
  if (Object.getPrototypeOf(value) === Object.prototype) {
    ls.set(prefix + key, JSON.stringify(value));
  } else {
    ls.set(prefix + key, value);
  }
};

export const getKey = (key) => {
  const value = ls.get(prefix + key);
  if (!value)
    throw new Error('missing_key');

  try {
    return JSON.parse(value);
  } catch (err) {
    return value;
  }
};

export const deleteKey = (key) => {
  ls.remove(prefix + key);
};

export const clearKeys = () => {
  [KEY_SESSION, KEY_ID, KEY_NAME].map(key => deleteKey(key));
};
