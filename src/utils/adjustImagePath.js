// utils/adjustImagePath.js
const BASE_PATH = '/malcolm_stewart';

export const adjustImagePath = (path) => {
  if (path.startsWith('/images')) {
    return `${BASE_PATH}${path}`;
  }
  return path;
};
