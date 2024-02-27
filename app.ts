console.log("wellcome to my practice Assingment.");
// EXAMPLE NO 1 STRING//
let Name: string = "Neha";
let sur_name: string = "Arshad";
console.log("My name is " + Name + "\n" + "My father name is " + sur_name);

//EXAMPLE NO 2 NUMBER//
let a : number = 6;
let b : number = 5;
//using arithmetic operator// 
console.log("a + b =" , a + b);
console.log("a * b =", a * b);
console.log("a - b =", a - b);
console.log("a / b =", a / b);

//EXAMPLE NO 3 NULL//
//assigning null to a varaibale//
let x: null = null;
console.log(x);

//EXAMPLE NO 4 UNDEFINED//
let flower: string[] = ["Red Rose", "Pink Rose","White Rose"];
console.log(flower[5]);

//another example//
let value:undefined = undefined; 
console.log(value)

//EXAMPLE NO 5 BOOLEAN//
let coding_isFUN : boolean = true;
let CodingIS_boring: boolean = false;
console.log(coding_isFUN);
console.log(CodingIS_boring);

//EXAMPLE NO 6 BIGINT//
let max_number: bigint =9000346787853427879534n
console.log(max_number);

//another example//
let Another_number = BigInt("9005365783649353772");
console.log(Another_number);

//another example//
let sum : bigint = max_number + Another_number;
console.log(sum);

//EAXMPLE NO 7 SYMBOL//
let symb_1: symbol= Symbol(); 
console.log(symb_1);

let sym_2 :symbol = Symbol("hello");
let sym_3 :symbol = Symbol("hello"); //unique values
console.log(sym_2 === sym_3);
 //another example
 let age: symbol = Symbol(`age`);
 let obj = {
    name : "assingment" ,
    class : "IT" ,
    [age] : 25
 }
 console.log(obj);


