import type { ComponentProps, ElementType } from 'react';

type TypographyStyle =
  | 'heading_1'
  | 'heading_2'
  | 'heading_3'
  | 'heading_4'
  | 'heading_5'
  | 'heading_6'
  | 'text';

interface TypographyOwnProps<E extends ElementType> {
  variant?: TypographyStyle;
  as?: E;
}

export type TypographyProps<E extends ElementType> = TypographyOwnProps<E>
  & Omit<ComponentProps<E>, keyof TypographyOwnProps<E>>;
