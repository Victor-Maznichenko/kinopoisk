import type { ToastType } from './lib';
import type { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { useMemo, useState } from 'react';
import { Button, Icons, Typography } from '../../atoms';
import { ToastContext, useToastContext } from './lib';
import styles from './styles.module.scss';

const Toast = ({ id, title, message, variant }: ToastType) => {
  const { close } = useToastContext();

  return (
    <div className={clsx(styles.toast, `variant-${variant}`)}>
      <Typography variant='heading_5' as='h5'>{title}</Typography>
      <Typography className={styles.toastMessage}>{message}</Typography>

      <Button className={styles.toastClose} onClick={() => close(id)} variant='unstyled'>
        <Icons.Close />
      </Button>
    </div>
  );
};

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const add = (toast: Omit<ToastType, 'id'>) => {
    const newToast = { ...toast, id: Date.now() };
    setToasts((state) => [...state, newToast]);
  };

  const close = (id: number) => setToasts((state) => state.filter((t) => t.id !== id));
  const clear = () => setToasts([]);

  const contextValue = useMemo(() => ({ add, clear, close }), []);

  return (
    <ToastContext value={contextValue}>
      {children}
      <div className={styles.toaster}>
        {toasts.map((toast) => <Toast {...toast} key={toast.id} />)}
      </div>
    </ToastContext>
  );
};
