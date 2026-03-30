import type { ComponentProps, ElementType } from 'react';
import clsx from 'clsx';
import { Typography } from '../../atoms';
import styles from './styles.module.scss';

interface MovieCardOwnProps<T> {
  categories?: string[];
  previewSrc?: string;
  title?: string;
  rate?: number;
  as?: T;
}

type MovieCardProps<T extends ElementType = 'article'> = MovieCardOwnProps<T> & Omit<ComponentProps<T>, keyof MovieCardOwnProps<T>>;

export const MovieCard = <T extends ElementType = 'article'>({ as, className, previewSrc, title, ...props }: MovieCardProps<T>) => {
  const Component = as ?? 'article';
  return (
    <Component className={clsx(styles.root, className)} {...props}>
      <img className={styles.img} src={previewSrc} loading='lazy' alt={title} />
      <Typography variant='heading_5' as='h5'>{title}</Typography>
    </Component>
  );
};
