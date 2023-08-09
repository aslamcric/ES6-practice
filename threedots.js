const ages1 = [12, 23, 13, 14, 15];
const ages2 = [22, 23, 24, 25, 26];
const ages3 = [2, 23, 24, 25, 26, 44];
const allAges = ages1.concat(ages2).concat([9]).concat(ages3);
const allAges2 = [...ages1, ...ages2, 9, ...ages3]
// console.log(allAges2);
const bussiness = 560;
const minister = 444;
const sochib = 777;
const takaPoisa = [560, 444, 777];
// const maximum = Math.max(bussiness, minister, sochib);
const maximum = Math.max(...takaPoisa);
console.log(maximum);