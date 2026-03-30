import { useState } from 'react';
import { Button, Typography } from '../../atoms';
import styles from './styles.module.scss';

interface ReadMoreTextProps {
  maxLength?: number,
  text: string,
}

export const ReadMoreText = ({ text, maxLength = 200 }: ReadMoreTextProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const shortestText = `${text.slice(0, maxLength).trim()}...`;

  const handleClick = () => {
    setIsOpen((state) => !state);
  };

  return (
    <p className={styles.root}>
      <Typography className={styles.text} as='span'>{isOpen ? text : shortestText} </Typography>
      <Button className={styles.button} onClick={handleClick} variant='text'>{isOpen ? 'Скрыть' : 'Показать'}</Button>
    </p>
  );
};
