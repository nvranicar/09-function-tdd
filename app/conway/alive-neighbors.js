export default function aliveNeighbors(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === true) {
      sum += 1;
    }
  }

  return sum;
}
