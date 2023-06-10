"use strict";
function binarySearch(arr, elem) {
    //
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    console.log(start, middle, end);
    //
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        }
        else {
            start = middle + 1;
        }
        console.log(start, middle, end);
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === elem) {
        return middle;
    }
    return -1;
}
//               L           M               R
const arrTest = [2, 4, 5, 7, 11, 15, 36, 74, 89];
const targValue = 11;
console.log(binarySearch(arrTest, targValue));
