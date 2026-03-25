import { Button, Typography } from '@/shared/ui';
import styles from './styles.module.scss';

const HOMEPAGE_CONTENT = {
  title: 'Самые сочные премьеры кино — у вас дома',
  description:
    'Ежедневно пополняемая библиотека с лучшими фильмами и сериалами — в дубляже и оригинале.Целый месяц бесплатно!',
  buttonText: 'Смотреть бесплатно'
};

export const HomePage = () => (
  <div className={styles.home}>
    <div className={styles.info}>
      <Typography variant='heading_2'>{HOMEPAGE_CONTENT.title}</Typography>
      <Typography className={styles.description} variant='text-m'>{HOMEPAGE_CONTENT.description}</Typography>
      <Button className={styles.button}>{HOMEPAGE_CONTENT.buttonText}</Button>
    </div>
  </div>
);
