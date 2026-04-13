import { Outlet } from 'react-router';
import { Footer } from '../footer';
import { Header } from '../header';
import { ScrollToTop } from '../scroll-to-top';
import styles from './styles.module.scss';

export const Layout = () => (
  <div className={styles.wrapper}>
    <ScrollToTop />
    <Header className={styles.header} />
    <main className={styles.main}>
      <Outlet />
    </main>
    <Footer />
  </div>
);
