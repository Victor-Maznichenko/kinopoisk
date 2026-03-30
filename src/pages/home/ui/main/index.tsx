import { useEffect } from 'react';
import { buildStaticURL } from '@/shared/lib';
import { Button, SliderСoverflow, Typography } from '@/shared/ui';
import { useHomeStore } from '../../model';
import styles from './styles.module.scss';

const HOMEPAGE_CONTENT = {
  title: 'Самые сочные премьеры кино — у вас дома',
  description:
    'Ежедневно пополняемая библиотека с лучшими фильмами и сериалами — в дубляже и оригинале.Целый месяц бесплатно!',
  buttonText: 'Смотреть бесплатно'
};

export const Main = () => {
  const { getPopularMovies, popularMovies } = useHomeStore();

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
      <SliderСoverflow.Root>
        {
          popularMovies.map(({ id, title, poster_path }) => (
            <SliderСoverflow.Slide className={styles.slide} key={id}>
              <img className={styles.slide__img} src={buildStaticURL(poster_path)} />
              <Typography as='h6'>{title}</Typography>
            </SliderСoverflow.Slide>
          ))
        }
      </SliderСoverflow.Root>
    </section>
  );
};
