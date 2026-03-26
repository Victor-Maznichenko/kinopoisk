import type { ComponentProps, ElementType } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

type ButtonVariants =
  | 'filled-red'
  | 'outline-white-icon'
  | 'outline-white'
  | 'unstyled';

interface ButtonOwnProps<T> {
  variant?: ButtonVariants;
  disabled?: boolean;
  loading?: boolean;
  as?: T;
}

type ButtonProps<T extends ElementType = 'button'> = ButtonOwnProps<T> & Omit<ComponentProps<T>, keyof ButtonOwnProps<T>>;

export const Button = <T extends ElementType = 'button'>({
  variant = 'filled-red',
  className,
  children,
  disabled,
  loading,
  as,
  ...props
}: ButtonProps<T>) => {
  const isDisabled = loading || disabled;
  const Component = as || 'button';

  const defaultButtonProps = {
    type: 'button' as const,
    disabled
  };

  return (
    <Component
      className={clsx(className, styles.button, styles[variant], isDisabled && styles.disabled)}
      {...(Component === 'button' ? defaultButtonProps : {})}
      {...props}
    >
      {loading ? 'Подождите...' : children}
    </Component>
  );
};
