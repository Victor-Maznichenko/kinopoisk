import { Typography } from '@/shared/ui';
import styles from './styles.module.scss';

const CATALOG_SECTION_CONTENT = {
  title: 'Каталог фильмов и сериалов'
};

export const Main = () => (
  <section className={styles.main}>
    <Typography variant='heading_2'>{CATALOG_SECTION_CONTENT.title}</Typography>
  </section>
);
