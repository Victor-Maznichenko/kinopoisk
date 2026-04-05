import type { DiscoverMovie200ResultsItem } from '@/shared/api';

export interface MoviesByGenre {
  list: (DiscoverMovie200ResultsItem & { genres_names?: string[] })[];
  name: string;
  id: number;
}
