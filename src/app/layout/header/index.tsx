import clsx from 'clsx';
import { Link } from 'react-router';
import { Avatar, Button, Icons, Typography } from '@/shared/ui/kit';
import styles from './styles.module.scss';

const NAVIGATION_LINKS = [
  {
    href: '/films',
    label: 'Фильмы'
  },
  {
    href: '/serials',
    label: 'Сериалы'
  },
  {
    href: '/collections',
    label: 'Подборки'
  }
];

export const Header = ({ className }: { className: string }) => (
  <header className={clsx(styles.header, className)}>
    <div className='container'>
      <div className={styles.inner}>
        <div className={styles.start}>
          <Link to='/'>
            <Icons.Logo />
          </Link>

          <nav>
            <ul className={styles.navList}>
              {
                NAVIGATION_LINKS.map(({ href, label }) => (
                  <li key={href}><Link to={href}>{label}</Link></li>
                ))
              }
            </ul>
          </nav>
        </div>

        <div className={styles.end}>
          <Button className={styles.search} variant='unstyled'>
            <Icons.Search />
            <Typography as='span'>Поиск</Typography>
          </Button>

          <Button variant='unstyled'>
            <Icons.Notify />
          </Button>

          <Link to='/profile'>
            <Avatar />
          </Link>
        </div>
      </div>
    </div>
  </header>
);
