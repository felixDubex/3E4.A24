const entier = 1;

const test =  1 + true; // 1 + 1 = 2 Don't divide by 0/false, it wll return 0/infinity
const test2 = false + '9';
const test3 = '100' + 123;
console.log(test);
console.log(test2);
console.log(test3);

console.log(('b' + 'a' + + 'a' + 'a')); // b + a + NaN + a = baNaNa


const equal1 = 1 == '1'; // ne pas faire
const equal2 = 1 === '1'; // faire Verification que les types sont les mêmes et la valeur est égale
console.log(equal2); // true