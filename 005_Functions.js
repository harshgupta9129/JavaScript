// function oneplusavg(a,b) {
//     return 1 + (a+b)/2;
// }

// let a = 5;
// let b = 9;
// let c = 10;

// console.log(`One Plus Average of a and b is ${oneplusavg(a,b)}`);
// console.log(`One Plus Average of b and c is ${oneplusavg(b,c)}`);
// console.log(`One Plus Average of a and c is ${oneplusavg(a,c)}`);

// const sumtwonum = (a,b)=> {
//     return a+b;
// }

// console.log(`The Sum of a and b ${sumtwonum(a,b)}`);
// console.log(`The Sum of b and c ${sumtwonum(b,c)}`);
// console.log(`The Sum of a and c ${sumtwonum(a,c)}`);

// Practice Set

let obj = {
    "harry" : 98,
    "rohan" : 70,
    "Akash" : 90
}

for (let a in obj) {
    console.log(`The Marks of ${a} is ${obj[a]}`);
}

function mean5(a,b,c,d,e) {
    return (a+b+c+d+e)/5;
}

console.log(`The Mean of 10,20,30,40,50 is ${mean5(10,20,30,40,50)}`);