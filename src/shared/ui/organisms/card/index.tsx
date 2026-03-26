import type { ComponentProps } from 'react';
import clsx from 'clsx';
import { Typography } from '../../atoms';
import styles from './styles.module.scss';

export const Root = ({ className, ...props }: ComponentProps<'article'>) => (
  <article className={clsx(styles.root, className)} {...props} />
);

export const Image = ({ className, ...props }: ComponentProps<'img'>) => (
  <img className={clsx(styles.img, className)} {...props} />
);

export const Title = ({ className, ...props }: ComponentProps<typeof Typography<'h5'>>) => (
  <Typography variant='heading_5' as='h5' {...props} />
);
