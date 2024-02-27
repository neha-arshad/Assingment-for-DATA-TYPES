"use strict";
console.log("wellcome to my practice Assingment.");
// EXAMPLE NO 1 STRING//
let Name = "Neha";
let sur_name = "Arshad";
console.log("My name is " + Name + "\n" + "My father name is " + sur_name);
//EXAMPLE NO 2 NUMBER//
let a = 6;
let b = 5;
//using arithmetic operator// 
console.log("a + b =", a + b);
console.log("a * b =", a * b);
console.log("a - b =", a - b);
console.log("a / b =", a / b);
//EXAMPLE NO 3 NULL//
//assigning null to a varaibale//
let x = null;
console.log(x);
//EXAMPLE NO 4 UNDEFINED//
let flower = ["Red Rose", "Pink Rose", "White Rose"];
console.log(flower[5]);
//another example//
let value = undefined;
console.log(value);
//EXAMPLE NO 5 BOOLEAN//
let coding_isFUN = true;
let CodingIS_boring = false;
console.log(coding_isFUN);
console.log(CodingIS_boring);
//EXAMPLE NO 6 BIGINT//
let max_number = 9000346787853427879534n;
console.log(max_number);
//another example//
let Another_number = BigInt("9005365783649353772");
console.log(Another_number);
//another example//
let sum = max_number + Another_number;
console.log(sum);
//EAXMPLE NO 7 SYMBOL//
let symb_1 = Symbol();
console.log(symb_1);
let sym_2 = Symbol("hello");
let sym_3 = Symbol("hello"); //unique values
console.log(sym_2 === sym_3);
//another example
let age = Symbol(`age`);
let obj = {
    name: "assingment",
    class: "IT",
    [age]: 25
};
console.log(obj);
