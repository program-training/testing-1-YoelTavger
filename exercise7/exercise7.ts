export function nextFibonacciValue(arr: number[]) {
  if (arr.length < 2) {
    return "The array must contain at least two numbers";
  }
  return arr[arr.length - 1] + arr[arr.length - 2];
}
