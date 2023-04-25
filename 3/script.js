'use strict'


let a = +prompt();
let b = +prompt();
let simpleNumber = (a, b) => {
    for (a; a <= b; a++) {
        let check = 1;
        for (let j = 2; j < a; j++) {
            a % j == 0 ? check *= 0 : check;
        }
        if (check == 1) {
            console.log(a);
        }
    }
}
simpleNumber(a, b);

