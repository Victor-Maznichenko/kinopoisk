const STATIC_BASE_URL = import.meta.env.VITE_STATIC_BASE_URL;

export const buildStaticURL = (path = '') => STATIC_BASE_URL + path;
