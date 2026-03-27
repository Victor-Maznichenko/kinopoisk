import type { ComponentProps } from 'react';
import clsx from 'clsx';
import { Typography } from '../../atoms';
import styles from './styles.module.scss';

interface MovieCardOwnProps {
  categories?: string[];
  previewSrc?: string;
  title?: string;
  rate?: number;
}

interface MovieCardProps extends MovieCardOwnProps, Omit<ComponentProps<'article'>, keyof MovieCardOwnProps> {}

export const MovieCard = ({ className, previewSrc, title, ...props }: MovieCardProps) => {
  return (
    <article className={clsx(styles.root, className)} {...props}>
      <img className={styles.img} src={previewSrc} loading='lazy' alt={title} />
      <Typography variant='heading_5' as='h5'>{title}</Typography>
    </article>
  );
};
