import 'swiper/css';
import 'swiper/css/effect-creative';
import type { ComponentProps } from 'react';
import clsx from 'clsx';
import { EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss';

const Z_AXIS_DEPH = -436;
const MOVE_PERCENTAGE = '92%';

const Slide = ({ className, ...props }: ComponentProps<typeof SwiperSlide>) => (
  <SwiperSlide className={clsx(styles.slide, className)} {...props} />
);

const Root = ({ className, children, modules = [], ...props }: ComponentProps<typeof Swiper>) => (
  <Swiper
    className={clsx(styles.slider, className)}
    creativeEffect={{
      limitProgress: 3,
      perspective: true,
      prev: { translate: [`-${MOVE_PERCENTAGE}`, 0, Z_AXIS_DEPH] },
      next: { translate: [MOVE_PERCENTAGE, 0, Z_AXIS_DEPH] }
    }}
    modules={[EffectCreative, ...modules]}
    slidesPerView='auto'
    effect='creative'
    grabCursor
    loop
    {...props}
  >
    {children}
  </Swiper>
);

Slide.displayName = 'SwiperSlide';
Root.displayName = 'Swiper';

export const SliderСoverflow = { Root, Slide };
