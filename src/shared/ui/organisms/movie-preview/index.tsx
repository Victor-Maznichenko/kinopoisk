import type { MovieDetails200 } from '@/shared/api';
import type { ComponentProps } from 'react';
import clsx from 'clsx';
import { buildStaticURL, COUNTRY_NAMES, formatDuration } from '@/shared/lib';
import { Button, Icons, Typography } from '@/shared/ui/atoms';
import { MoviePreviewContext, useMoviePreviewContext } from './lib';
import styles from './styles.module.scss';

interface MoviePreviewProps extends ComponentProps<'section'> {
  movie: Required<MovieDetails200>
}

interface TitleProps extends ComponentProps<typeof Typography<'h1'>> {}
interface ButtonProps extends ComponentProps<typeof Button> {}

const Title = ({ children, ...props }: TitleProps) => {
  const { title } = useMoviePreviewContext();

  return (
    <Typography variant='heading_1' as='h1' {...props}>{title}</Typography>
  );
};

const Info = ({ children, className, ...props }: TitleProps) => {
  const { vote_average, release_date, origin_country, genres, runtime } = useMoviePreviewContext();
  const rate = String(vote_average).slice(0, 3);
  const year = new Date(release_date).getFullYear();

  return (
    <div className={clsx(styles.info, className)} {...props}>
      <Typography primaryColor>{rate}</Typography>
      <Typography>
        <span>• </span>
        <span>{year}, </span>

        {genres.map(({ id, name }) => (
          <span key={id}>{name}{', '}</span>
        ))}

        <span>• </span>
        {origin_country.map((countryCode) => (
          <span key={countryCode}>{COUNTRY_NAMES?.[countryCode] ?? ''}{', '}</span>
        ))}

        <span>• </span>
        <span>{formatDuration(runtime)}</span>
      </Typography>
    </div>
  );
};

const Actions = ({ children, className, ...props }: TitleProps) => (
  <div className={clsx(styles.actions, className)} {...props}>
    {children}
  </div>
);

const ButtonWatch = ({ children, className, ...props }: ButtonProps) => (
  <Button className={clsx(styles.button, styles.buttonPlay, className)} {...props}>
    <span>Смотреть фильм</span>
    <Icons.PlayTriangle />
  </Button>
);

const ButtonTrailer = ({ children, className, ...props }: ButtonProps) => (
  <Button className={clsx(styles.button, className)} variant='outline-white' {...props}>
    Трейлер
  </Button>
);

// Сделать хук useLike(id) и использовать там useLocalStorage возможно
const ButtonLike = ({ children, className, ...props }: ButtonProps) => {
  const movie = useMoviePreviewContext();

  const handleLike = () => {
    const likes = localStorage.getItem('liked_films');

    if (!likes) {
      localStorage.setItem('liked_films', JSON.stringify([movie.id]));
      return;
    }

    const likesArr = JSON.parse(likes) as number[];

    if (likesArr.includes(movie.id)) {
      localStorage.setItem('liked_films', JSON.stringify(likesArr.filter((id) => id !== movie.id)));
      return;
    }

    likesArr.push(movie.id);
    localStorage.setItem('liked_films', JSON.stringify(likesArr));
  };

  return (
    <Button className={clsx(styles.button, className)} variant='outline-white-icon' onClick={handleLike} {...props}>
      <Icons.Heart />
    </Button>
  );
};

const MoviePreview = ({ className, movie, children, style = {}, ...props }: MoviePreviewProps) => {
  const rootStyle = {
    ...style,
    backgroundImage: `url(${buildStaticURL(movie.backdrop_path)})`
  };

  return (
    <MoviePreviewContext value={movie}>
      <section className={clsx(styles.root, className)} style={rootStyle} {...props}>
        <div className='container'>
          <div className='content'>
            {children}
          </div>
        </div>
      </section>
    </MoviePreviewContext>
  );
};

MoviePreview.Info = Info;
MoviePreview.Title = Title;
MoviePreview.Actions = Actions;
MoviePreview.ButtonLike = ButtonLike;
MoviePreview.ButtonWatch = ButtonWatch;
MoviePreview.ButtonTrailer = ButtonTrailer;

export { MoviePreview };
