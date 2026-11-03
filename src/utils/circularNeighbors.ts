export function getCircularNeighbors<T>(
  items: readonly T[],
  matchedIndex: number,
) {
  const currentIndex = matchedIndex < 0 ? 0 : matchedIndex;

  return {
    previous: items[(currentIndex - 1 + items.length) % items.length],
    next: items[(currentIndex + 1) % items.length],
  };
}
