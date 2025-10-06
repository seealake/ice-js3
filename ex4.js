const grades = ["A", "A", "AB", "C", "B"];

/* WITHOUT EDITING THE ABOVE CODE,
   make the program print:
   AB
   ["A", "B", "C"]
*/
// write code here!
grades.push("A");
grades.sort();
grades.splice(1, 2);
// Don't edit the below code
const last = grades.pop();
console.log(last); // should print AB
console.log(grades); // should print ["A", "B", "C"]
