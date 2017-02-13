export default function deepEquals(a, b) {
  let sum = 0;

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] === b[i]) {
      sum += 1;
    }
  }

  if (sum === a.length && sum === b.length) {
    return true;
  }

  return false;
}
