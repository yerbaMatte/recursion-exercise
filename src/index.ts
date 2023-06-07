function sameFrequency(int1: number, int2: number): any {
  const string1: string[] = int1.toString().split('');
  const string2: string[] = int2.toString().split('');

  if (string1.length !== string2.length) return false;

  //                          index signature
  const frequencyObject1: { [key: string]: number } = {};

  for (let char of string1) {
    frequencyObject1[char] = (frequencyObject1[char] || 0) + 1;
  }

  for (let char of string2) {
    if (frequencyObject1[char]) {
      frequencyObject1[char] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(213, 321));
