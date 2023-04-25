'use strict';



let fib = x => {
    let fibNumber = a => a <2 ? a : fibNumber(a-1) + fibNumber(a-2);
    for ( let i=1; i<=x; i++){
        console.log(fibNumber(i));
    }
}

fib(10);