import type { ComponentProps } from 'react';
import clsx from 'clsx';
import { Condition, Icons } from '@/shared/ui/kit/atoms';
import { getInitials } from './lib';
import styles from './styles.module.scss';

interface AvatarProps extends ComponentProps<'img'> {
  variant?: 'circle' | 'square';
  text?: string;
  size?: number;
}

const Skeleton = ({ src, variant = 'square', size = 54, ...props }: AvatarProps) => (
  <div
    className={clsx(styles.avatar, variant && styles[variant])}
    style={{ '--avatar-size': `${size}px`, ...props.style } as React.CSSProperties}
  >
    <Skeleton />
  </div>
);

const Avatar = ({ src, variant = 'square', size = 54, text, ...props }: AvatarProps) => (
  <div
    className={clsx(styles.avatar, variant && styles[variant], !text && !src && styles.iconPlaceholder)}
    style={{ '--avatar-size': `${size}px`, ...props.style } as React.CSSProperties}
  >
    <Condition
      else={
        <Condition else={<Icons.User size={20} />} then={getInitials(text ?? '')} value={text} />
      }
      then={<img className={styles.img} src={src} {...props} />}
      value={src}
    />
  </div>
);

Avatar.Skeleton = Skeleton;

export { Avatar };
