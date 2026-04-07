import { useNavigate } from 'react-router';
import notFoundSrc from '@/shared/assets/images/not-found.webp';
import { ROUTES } from '@/shared/lib';
import { Button } from '@/shared/ui/kit';
import styles from './styles.module.scss';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleBackward = () => navigate(-1);
  const handleHome = () => navigate(ROUTES.ROOT);

  return (
    <main className={styles.notFound}>
      <img className={styles.img} alt='Страница не найдена =(' src={notFoundSrc} />
      <div>
        <Button className={styles.button} onClick={handleHome}>
          На главную
        </Button>
        <Button className={styles.button} onClick={handleBackward} variant='outline-white'>
          Вернуться назад
        </Button>
      </div>
    </main>
  );
};
