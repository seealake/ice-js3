const grades = ["A", "A", "AB", "C", "B"];

/* WITHOUT EDITING THE ABOVE CODE,
   make the program print:
   AB
   ["A", "B", "C"]
*/

// write code here!

grades.splice(1, 2);
grades.splice(2, 1);
grades.push("B");
// Don't edit the below code
const last = grades.pop();
console.log(last); // should print AB
console.log(grades); // should print ["A", "B", "C"]
