import type { TypographyProps } from './types';
import type { ElementType } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

export const Typography = <E extends ElementType = 'p'>({
  as,
  children,
  className,
  primaryColor = false,
  variant = 'text-m',
  ...props
}: TypographyProps<E>) => {
  const Component = as ?? 'p';

  return (
    <Component className={clsx(styles[variant], primaryColor && styles.primaryColor, className)} {...props}>
      {children}
    </Component>
  );
};
