import { Link } from 'react-router';
import { ROUTES } from '@/shared/lib';
import { Icons, Typography } from '@/shared/ui';
import { CONTACTS, NAVIGATION_DATA, SOCIALS } from './lib';
import styles from './styles.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className='container'>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link to={ROUTES.ROOT}>
            <Icons.Logo />
          </Link>
          <Typography>© КиноДом 2020</Typography>
        </div>
        <nav className={styles.navigation}>
          {
            NAVIGATION_DATA.map((column, i) => (
              <div className={styles.column} key={i}>
                {
                  column.map(({ title, links }) => (
                    <div key={title}>
                      <Typography variant='heading_6' as='h6'>{ title }</Typography>
                      <ul>
                        {
                          links.map(({ label, route }) => (
                            <li className={styles.listItem} key={route}>
                              <Link to={route}>{ label }</Link>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </nav>
        <div className={styles.column}>
          <div>
            <Typography variant='heading_6' as='h6'>{CONTACTS.title}</Typography>
            <ul>
              {CONTACTS.items.map(({ label, href }) => (
                <li className={styles.listItem} key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Typography variant='heading_6' as='h6'>{SOCIALS.title}</Typography>
            <div className={styles.socialList}>
              {SOCIALS.items.map(({ href, icon }) => {
                const Icon = Icons[icon];

                return (
                  <a href={href} key={href}>
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
