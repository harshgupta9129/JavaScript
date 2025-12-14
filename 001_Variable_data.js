// console.log("Hello World");

// let a = 67
// console.log(a)
// a = "Harsh Gupta"
// console.log(a)

// let 1harsh = "Harsh" Not Valid

// Case Sensitive Variable name

// var a = 45;
// var b = "Harsh"
// var c = null

// {
//     var b = 45
//     console.log(b);
// }
// console.log(b); It also change global b value

// So Use let over var

// Primitive Data Types

// 7 Type NN SS BB U
let a = null;
let b = 456;
let c = true;
let d = BigInt("676849583488573485702375");
let e = "Harsh";
let f = Symbol("Hey I am Harsh");
let g = undefined;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);

// Objects
const item = {
    "Harsh" : true,
    "Shubh" : false,
    "Lovish" : 67,
    "Rohan" : undefined

}

// console.log(item["Harsh"]);

// Practice Set

let str = "Harsh"
str = str + 1;
console.log(str);
console.log(typeof(str));

const obj1 = {
    "num1" : 1,
    "num2" : 1
}

obj1["num1"]+=obj1["num2"];
console.log(obj1);

obj1["num3"] = 3;
console.log(obj1);

const dict = {
    "Apple" : "Seb",
    "Boy" : "Ladhka",
    "Cat" : "Billi",
    "Dog" : "Kutta",
    "Elephant" : "Hathi"
}
console.log(dict);