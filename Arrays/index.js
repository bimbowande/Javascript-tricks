
/**
  #1
    removing duplicates from an array
*/
  

// (method 1)

var fruits = ['banana','manago','apple','sugarcane','manago','apple']

var uniqueFruits = Array.from(new Set(fruits));

//(method 2)

var uniqueFruits2 = [...new Set(fruits)];



/**
 * #2
 * Replace the specific value in an array
 */

var fruits2 = [...fruits];
fruits2.splice(0,2,"potato","tomato");



/**
 * #3
 * map array without maps
 */
var friends = [
    {name:"John", age:22},
    {name:"Peter", age:23},
    {name:"bimbo",age:34},
    {name:"mark",age:45},
    {name:"Esther",age:21},
    {name:"Monica",age:19}
]


var friendNames = Array.from(friends,({name})=>name);


/**
 * #4
 * emptying an array
 */

var fruits3 = [...fruits];
fruits3.length = 0;


/**
 * #5
 * convert an array to an object
 */

const fruits4 = [...fruits];
const fruitsObj = {...fruits4};
console.log(fruitsObj);

/**
 * #6
 * fulfill array with data
 */

var newArray = new Array(10).fill("1");
console.log(newArray);


/**
 * #7 
 * Merge Arrays
 */

var fruits5 = [...fruits4];
var meat = ["Poultry","beef","fish"]
var vegetables = ["Potato","tomato","cucumber"]

var food = [...fruits5,...meat,...vegetables];


//merging only duplicates value

var numOne = [0,2,4,6,8,8];
var numTwo = [1,2,3,4,5,6];

const duplicatedValue = [...new Set(numOne)].filter(item=>numTwo.includes(item));



/**
 * #8
 * remove falsy value from an array
 */

const mixedArray = [0,"blue","",NaN,true,undefined,"white",false];
const filteredArray = mixedArray.filter(Boolean);
console.log(filteredArray);

/**
 * #9
 * get random value from the Array
 */

const arr = ['blue','red','green','black'];
const randomArr  = arr[ Math.floor(Math.random() * arr.length) ];
console.log(randomArr);


/**
 * #10
 *  reverse an array
 * 
 */

const colors = ['blue','red','green','black'];
const reverseColors = colors.reverse();

console.log(reverseColors);


/**
 * #11
 * sum the value in an array
 */

const val = [1,4,5,7];
const valSum = val.reduce((x,y)=>x+y);
console.log(valSum);


/**12 
 * Generate an array from a function Arguments
 */

 function f() {
    return Array.from(arguments);
  }
  console.log(f(1,2,4))
  