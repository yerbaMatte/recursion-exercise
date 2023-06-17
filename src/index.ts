// stairs

// const memo: { [key: number]: number } = { 1: 1, 2: 2 };

// var climbStairs = function (n: number): number {
//   const result = memo[n];
//   if (result !== undefined) {
//     return result;
//   }
//   const left = climbStairs(n - 2);
//   memo[n - 2] = left;
//   const right = climbStairs(n - 1);
//   memo[n - 1] = right;

//   return left + right;
// };
