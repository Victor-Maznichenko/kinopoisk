export const formatDuration = (minutesTotal: number) => {
  const hours = Math.trunc(minutesTotal / 60);
  const minutes = minutesTotal % 60;

  return `${hours} ч ${minutes} мин`;
};
