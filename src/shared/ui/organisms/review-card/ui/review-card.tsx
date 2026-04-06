import type { MovieReviews200ResultsItem } from '@/shared/api';
import { memo } from 'react';
import { buildStaticURL } from '@/shared/lib';
import { Avatar, ReadMoreText, Typography } from '@/shared/ui';
import styles from './styles.module.scss';

interface ReviewCardProps extends Required<MovieReviews200ResultsItem> {
  className?: string;
}

export const ReviewCard = memo(({ className, author_details, content, created_at }: ReviewCardProps) => {
  const avatarSrc = author_details.avatar_path ? buildStaticURL(author_details.avatar_path, 'logo') : undefined;

  const formattedDate = new Date(created_at).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className={className}>
      <div className={styles.person}>
        <Avatar variant='circle' src={avatarSrc} />
        <div>
          <Typography className={styles.personName} as='b'>{author_details.name}</Typography>
          <Typography className={styles.personDate} variant='text-s'>{formattedDate}</Typography>
        </div>
      </div>
      <div className={styles.overview}>
        <Typography primaryColor>{String(author_details.rating)}/10</Typography>
        <Typography>• «Вуди, Руди, Винии»</Typography>
      </div>
      <ReadMoreText text={content} />
    </div>
  );
});
