//create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

let num =250;
let cal ;
cal = num *0.25;
console.log(cal);

// Array Tasks : 
//1
//Correct the syntax error

// [ 1,7  9  45, ]
//solution
 let x =[ 1,7 , 9,  45 ];

// ["Str" "alex","moh"
//solution
 let string = ["Str" ,"alex","moh"];

// 'the','fox' 'over' lazy, 'dog',  ]
//solution
 let arr = ['the','fox' ,'over' ,'lazy', 'dog'  ];

// 2
//What the index of "Banana","Tomato"

var fruits=["Tomato","Banana","Watermelon"];
let f = fruits.indexOf("Banana");
let fr = fruits.indexOf("Tomato");
console.log(f);
console.log(fr);

/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
var food = ["pizza","mansaf"];
var sport = ["Jumping rope","swimming","Walking"];
var movie = ["avatar","Alice","Brave"];


/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
var number = [1,4,5];
console.log(number[0]);
var char = ["t","u","g","x"];
console.log(char[0]);

/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
var numbers = [1,4,5];
console.log(numbers[numbers.length-1]);
var character = ["t","u","g","x"];
console.log(character[character.length-1]);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9];
array.pop();
array.shift();
array.shift();
array.shift();
array.unshift(9);
array.push(1,3,4,6,8,10);
array.sort();
console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

var array2 = [];
array2.push(5,9,-7,3.5);
console.log(array2);


/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
const arr1 = [-3, 8, 7, 6, 5,-4, 3, 2, 1];
console.log(arr1.sort());
