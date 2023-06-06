export function rangeDataCarousel(from: number, to: number) {
  const offset = from;
  const length = to - from + 1;

  if (length < 0) {
    return [];
  }

  return [...Array(length).keys()].map(value => value + offset);
}
