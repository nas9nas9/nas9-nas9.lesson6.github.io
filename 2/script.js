'use strict'

// let progression = function(a, q){
//     let sum = 0;
//     for(let i = 0; i < a; i++ ){
//         sum += q**i
//     }
//     return(sum);
// }

// console.log(progression(5, 2));



let progression = function(n, q){
    return (1 *(1-q**n)/(1-q));

}

console.log(progression(5, 2));