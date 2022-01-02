# Javascript-tricks

Learning basic tricks in Javascript.

## Arrays

### Manipulating Arrays

1.  Removing duplicates from an array

```Javascript

// (method 1)

var fruits = ['banana','manago','apple','sugarcane','manago','apple']

var uniqueFruits = Array.from(new Set(fruits));

//(method 2)

var uniqueFruits2 = [...new Set(fruits)];

```
