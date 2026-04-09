import { useLocalStorage } from './use-local-storage';

export const useLike = (movieId: number) => {
  const [value, setValue] = useLocalStorage<number[]>({ key: 'likes_movies' });

  const isLiked = value?.includes(movieId);

  const toggleLike = () => {
    if (value) {
      if (isLiked) {
        setValue(value.filter((id) => id !== movieId));
        return;
      }

      setValue([...value, movieId]);
      return;
    }

    setValue([movieId]);
  };

  return { isLiked, toggleLike };
};
