"use strict";
function lengthOfLastWord(s) {
    let x = s.trim().split(' ').slice(-1)[0].length;
    console.log(x);
    return x;
}
lengthOfLastWord('   fly me   to   the moon  ');
