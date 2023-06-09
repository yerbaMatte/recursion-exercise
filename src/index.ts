function binarySearch(array: number[], target: number): number {
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor((array.length - 1) / 2);
  while (left > right) {
    if (target > middle) {
      right = middle;
    } else {
      left = middle;
    }
    middle = Math.floor((right - left) / 2);
    if (middle === target) return middle;
  }

  return target;
}

const arrTest = [2, 4, 5, 7, 11, 15, 36, 43, 74, 89];
const targValue = 43;

console.log(binarySearch(arrTest, targValue));
