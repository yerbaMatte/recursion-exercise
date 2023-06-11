"use strict";
function countUp(num) {
    if (num > 9) {
        console.log('I got 10!');
        return;
    }
    console.log(`Number is not greater than 10! It's ${num}!`);
    num++;
    countUp(num);
}
countUp(0);
