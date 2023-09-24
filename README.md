## Javascript-tricks

# Learning basic tricks in Javascript.

## Arrays

### Manipulating Arrays

1.  Removing duplicates from an array

```Javascript

/*
 #method 1
*/

  let fruits = ['banana','mango','apple','sugarcane','mango','apple']

  let uniqueFruits = Array.from(new Set(fruits));

 // uniqueFruits -- [ 'banana', 'manago', 'apple', 'sugarcane' ]

/*
 # method 2
*/

  let uniqueFruits2 = [...new Set(fruits)];
  
  // uniqueFruits2 -- [ 'banana', 'manago', 'apple', 'sugarcane' ]
  
  /*
  # method 3
  */
  
  uniqueArray = [];
 fruits.forEach((value) => !uniqueArray.includes(value) ? uniqueArray.push(value) : uniqueArray )
```


2. Replace the specific value in an array

```Javascript
    var fruits2 = [...fruits];
    
    fruits2.splice(0,2,"potato","tomato");
    
    // fruits2  ['potato', 'tomato', 'apple', 'sugarcane', 'manago', 'apple' ]

```

3.  Mapping array without maps

```JavaScript
  
  let friends = [
      {name:"John", age:22},
      {name:"Peter", age:23},
      {name:"bimbo",age:34},
      {name:"mark",age:45},
      {name:"Esther",age:21},
      {name:"Monica",age:19}
  ];
  
  let friendNames = Array.from(friends,({name})=>name);
  
  // friendNames --   ['John', 'Peter', 'bimbo', 'mark', 'Esther', 'Monica' ]



```

4. Emptying an array

```JavaScript
  let fruits = ['banana','mango','apple','sugarcane','mango','apple']
  
  fruits.length = 0;
  
  // fruits -- []
```

5. Convert an array to an object

``` JavaScript
   let fruits = ['banana','manago','apple','sugarcane','manago','apple']
   
   const fruitsObj = {...fruits};
   
   //  fruitsObj --  {'0': 'banana','1': 'mango', '2': 'apple','3': 'sugarcane','4': 'mango','5': 'apple'}
 
 ```
 
 6. Fulfill array with data

```JavaScript
  let newArray = new Array(10).fill("1");
  
  // newArray -- ['1', '1', '1', '1','1', '1', '1', '1','1', '1']

```

7. Merging Arrays

```JavaScript
  let fruits = ['banana','manago','apple'];
  let meat = ["Poultry","beef","fish"]
  let vegetables = ["Potato","tomato","cucumber"];
  let food = [...fruits,...meat,...vegetables];
  
  // food  -- ['banana',  'manago','apple',   'sugarcane','manago',  'apple','Poultry', 'beef','fish',    'Potato','tomato',  'cucumber']

```

8. Merging only duplicates value in two arrays

```JavaScript
    let numOne = [0,2,4,6,8,8];
    let numTwo = [1,2,3,4,5,6];

    const duplicatedValue = [...new Set(numOne)].filter(item=>numTwo.includes(item));
    // duplicatedValue -- [ 2, 4, 6 ]

```

9. Remove falsy value from an array.

```JavaScript
    const mixedArray = [0,"blue","",NaN,true,undefined,"white",false];
    const filteredArray = mixedArray.filter(Boolean);
    
    // filteredArray -- [ 'blue', true, 'white' ]

```

10. Reverse an array

```JavaScript
  const colors = ['blue','red','green','black'];
  
  const reverseColors = colors.reverse();
  // reverseColors  -- [ 'black', 'green', 'red', 'blue' ]

```

11. Sum of the value in an array

``` JavaScript
  const val = [1,4,5,7];
  
  const valSum = val.reduce((x,y)=>x+y);
  
  // valSum --  17
```

12. Generate an array from a function Arguments

``` JavaScript
 function f() {
    return Array.from(arguments);
  }
  f(1,2,4))
  
  // result -- [1,2,4]

```

13. Sorting the value in an array

``` JavaScript
 const sortNumber = (values) => {
    if(!Array.isArray(values)){
      return null
    }
    return  values.sort((a,b)=>a-b);
  }

```
