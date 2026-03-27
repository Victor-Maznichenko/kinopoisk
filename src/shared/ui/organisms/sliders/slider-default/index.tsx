import 'swiper/css';
import type { ComponentProps } from 'react';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss';

const Slide = ({ className, ...props }: ComponentProps<typeof SwiperSlide>) => (
  <SwiperSlide className={clsx(styles.slide, className)} {...props} />
);

const Root = ({ className, children, ...props }: ComponentProps<typeof Swiper>) => (
  <Swiper
    className={clsx(styles.slider, className)}
    slidesPerView='auto'
    grabCursor
    {...props}
  >
    {children}
  </Swiper>
);

Slide.displayName = 'SwiperSlide';
Root.displayName = 'Swiper';

export const SliderDefault = { Root, Slide };
