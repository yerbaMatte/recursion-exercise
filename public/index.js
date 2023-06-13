"use strict";
// Merge Sort
function mergeSort(arr1, arr2) {
    let sortedArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sortedArray.push(arr1[i]);
            i++;
        }
        else {
            sortedArray.push(arr2[j]);
            j++;
        }
    }
    if (i !== arr1.length)
        sortedArray.push(...arr1.slice(i));
    if (j !== arr2.length)
        sortedArray.push(...arr2.slice(j));
    return sortedArray;
}
const arr1 = [1, 4, 6, 11, 50, 90];
const arr2 = [3, 7, 15, 66, 111, 222, 234, 666];
console.log(mergeSort(arr1, arr2));
