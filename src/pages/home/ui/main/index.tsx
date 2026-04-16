import { useEffect } from 'react';
import { Link } from 'react-router';
import { Autoplay } from 'swiper/modules';
import { buildStaticURL, ROUTES } from '@/shared/lib';
import { Button, Condition, Skeleton, SliderСoverflow, Typography } from '@/shared/ui/kit';
import { usePopularMovies } from '../../model';
import styles from './styles.module.scss';

const HOMEPAGE_CONTENT = {
  title: 'Самые сочные премьеры кино — у вас дома',
  description:
    'Ежедневно пополняемая библиотека с лучшими фильмами и сериалами — в дубляже и оригинале.Целый месяц бесплатно!',
  buttonText: 'Смотреть бесплатно'
};

export const Main = () => {
  const { isLoading, getPopularMovies, popularMovies } = usePopularMovies();

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <section className={styles.main}>
      <div className={styles.info}>
        <Typography variant='heading_2'>{HOMEPAGE_CONTENT.title}</Typography>
        <Typography className={styles.description} variant='text-m'>{HOMEPAGE_CONTENT.description}</Typography>
        <Button className={styles.button}>{HOMEPAGE_CONTENT.buttonText}</Button>
      </div>
      <Condition
        else={(
          <SliderСoverflow.Root modules={[Autoplay]} speed={500} autoplay>
            {popularMovies.map(({ id, title, poster_path }) => (
              <SliderСoverflow.Slide key={id}>
                <Link to={ROUTES.MOVIE.replace(':id', String(id))}>
                  <img className={styles.slide__img} src={buildStaticURL(poster_path)} />
                  <Typography as='h6'>{title}</Typography>
                </Link>
              </SliderСoverflow.Slide>
            ))}
          </SliderСoverflow.Root>
        )}
        then={(
          <SliderСoverflow.Root>
            {Array.from({ length: 4 }).map((_, i) => (
              <SliderСoverflow.Slide key={i}>
                <Skeleton height={546} />
              </SliderСoverflow.Slide>
            ))}
          </SliderСoverflow.Root>
        )}
        value={isLoading}
      />
    </section>
  );
};
