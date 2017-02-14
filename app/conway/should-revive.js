import aliveNeighbors from './alive-neighbors';

export default function reviveEh(arr) {
  if (aliveNeighbors(arr) > 1 && aliveNeighbors(arr) < 4) {
    return true;
  }

  return false;
}
