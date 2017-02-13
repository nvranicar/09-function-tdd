export default function sum(arr) {
  const length = arr.length;
  let sumValue = 0;

  for (let i = 0; i < length; i += 1) {
    sumValue += arr[i];
  }

  return sumValue;
}
