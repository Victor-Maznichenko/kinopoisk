import { Button, SliderСoverflow, Typography } from '@/shared/ui';
import waveSrc from './wave.jpg';
import styles from './styles.module.scss';

const HOMEPAGE_CONTENT = {
  title: 'Самые сочные премьеры кино — у вас дома',
  description:
    'Ежедневно пополняемая библиотека с лучшими фильмами и сериалами — в дубляже и оригинале.Целый месяц бесплатно!',
  buttonText: 'Смотреть бесплатно'
};

export const Main = () => (
  <section className={styles.main}>
    <div className={styles.info}>
      <Typography variant='heading_2'>{HOMEPAGE_CONTENT.title}</Typography>
      <Typography className={styles.description} variant='text-m'>{HOMEPAGE_CONTENT.description}</Typography>
      <Button className={styles.button}>{HOMEPAGE_CONTENT.buttonText}</Button>
    </div>
    <SliderСoverflow.Root>
      {
        Array.from({ length: 8 }).map((_, i) => (
          <SliderСoverflow.Slide className={styles.slide} key={i}>
            <img className={styles.slide__img} src={waveSrc} />
            <Typography as='h6'>Бесстыжие. 11 сезон. Финал</Typography>
          </SliderСoverflow.Slide>
        ))
      }
    </SliderСoverflow.Root>
  </section>
);
