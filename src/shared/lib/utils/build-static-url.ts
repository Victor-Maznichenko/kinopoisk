const STATIC_BASE_URL = import.meta.env.VITE_STATIC_BASE_URL;

type ImageType = 'logo' | 'original';

export const buildStaticURL = (path = '', type: ImageType = 'original') => {
  switch (type) {
    case 'logo':
      return `${STATIC_BASE_URL}w154/${path}`;

    default:
      return `${STATIC_BASE_URL}original/${path}`;
  }
};
