import 'swiper/css';
import type { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx';
import { useMemo, useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useForkRef } from '@/shared/lib';
import { Button, Icons } from '@/shared/ui/kit/atoms';
import { SliderContext, useSliderContext } from './lib';
import styles from './styles.module.scss';

interface RootProps extends ComponentProps<typeof Swiper> {
  prev?: ReactNode;
  next?: ReactNode;
}

const Prev = ({ className, hide, ref, ...props }: ComponentProps<typeof Button>) => {
  const { prevRef } = useSliderContext();
  const handleRef = useForkRef(ref, prevRef);
  return (
    <Button className={clsx(styles.buttonPrev, hide && styles.hide, className)} variant='unstyled' ref={handleRef} {...props}>
      <Icons.ArrowRight />
    </Button>
  );
};

const Next = ({ className, hide, ref, ...props }: ComponentProps<typeof Button>) => {
  const { nextRef } = useSliderContext();
  const handleRef = useForkRef(ref, nextRef);
  return (
    <Button className={clsx(styles.buttonNext, hide && styles.hide, className)} variant='unstyled' ref={handleRef} {...props}>
      <Icons.ArrowRight />
    </Button>
  );
};

const Slide = ({ className, ...props }: ComponentProps<typeof SwiperSlide>) => (
  <SwiperSlide className={clsx(styles.slide, className)} {...props} />
);

const Root = ({
  className,
  prev,
  next,
  modules,
  onBeforeInit,
  children,
  ...props
}: RootProps) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const contextValue = useMemo(() => ({ prevRef, nextRef }), []);

  return (
    <SliderContext value={contextValue}>
      <div className={clsx(styles.root, className)}>
        <Swiper
          className={styles.slider}
          onBeforeInit={(swiper) => {
            if (prevRef.current && nextRef.current) {
              swiper.navigation.prevEl = prevRef.current;
              swiper.navigation.nextEl = nextRef.current;
            }

            if (onBeforeInit) onBeforeInit(swiper);
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          modules={[Navigation, ...(modules ?? [])]}
          slidesPerView='auto'
          grabCursor
          {...props}
        >
          {children}
        </Swiper>
        {prev ?? <Prev hide />}
        {next ?? <Next hide />}
      </div>
    </SliderContext>
  );
};

Slide.displayName = 'SwiperSlide';
Root.displayName = 'Swiper';
export const SliderDefault = { Root, Slide, Prev, Next };
