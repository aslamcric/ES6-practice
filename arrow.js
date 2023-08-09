// function doubleIt(num){
//     return num *2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }

// ES6 shortcut
//single
const doubleIt = (num) => num * 2;
//empty
const give5 = () => 5;
// twice+
const add = (x, y) => x + y;
// long function
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = doubleIt(50);
const result2 = add(50, 30);
const result3 = doMath(7, 5);
console.log(result);