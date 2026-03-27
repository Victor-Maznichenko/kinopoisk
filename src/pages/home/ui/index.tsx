import { Catalog } from './catalog';
import { Main } from './main';
import styles from './styles.module.scss';

export const HomePage = () => (
  <div className={styles.home}>
    <Main />
    <Catalog />
  </div>
);
