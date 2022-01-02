
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
console.log(fruits3);;