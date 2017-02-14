import aliveNeighbors from './alive-neighbors';

export default function aliveEh(arr) {
  if (aliveNeighbors(arr) === 0) {
    return false;
  }
  if (aliveNeighbors(arr) > 1 && aliveNeighbors(arr) < 4) {
    return true;
  }

  return false;
}
