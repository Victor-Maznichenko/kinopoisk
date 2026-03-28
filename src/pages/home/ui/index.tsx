import clsx from 'clsx';
import { Catalog } from './catalog';
import { Main } from './main';
import styles from './styles.module.scss';

export const HomePage = () => (
  <main className={clsx((styles.home, 'container'))}>
    <Main />
    <Catalog />
  </main>
);
