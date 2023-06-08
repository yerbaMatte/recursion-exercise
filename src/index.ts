function maxSubarraySum(arr: number[], subArr: number) {
  if (arr.length < subArr) return false;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < subArr; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = subArr; i < arr.length; i++) {
    tempSum += arr[i] - arr[i - subArr];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
