const student = {
  name: "Bucky Badger",
  age: 21,
  isFullTime: true,
};

const anotherBucky = {};

/* WITHOUT EDITING, COPYING, or PASTING the above code,
   change the data so that the final console.log prints Bucky's information
*/

// write code here

anotherBucky.name = student.name;
anotherBucky.age = student.age;
anotherBucky.isFullTime = student.isFullTime;
console.log(anotherBucky);

/* save the file and execute in terminal with:
   node ex2.js
*/
