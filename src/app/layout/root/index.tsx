import { Outlet } from 'react-router';
import { Header } from '../header';
import { Footer } from '../footer';
import styles from './styles.module.scss';

export const Layout = () => (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
