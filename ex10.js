/* find the:
   - average (arithmetic mean)
   - median
   - number of unique values
   - number of occurrences of EACH unique value
*/

const data = [
  97, 43, 17, 72, 20, 31, 9, 66, 6, 30, 2, 71, 56, 74, 41, 20, 23, 7, 23, 5, 48,
  94, 24, 81, 1, 33, 9, 51, 98, 50, 71, 1, 5, 83, 10, 2, 3, 26, 67, 14, 17, 38,
  66, 38, 62, 42, 37, 53, 34, 61, 4, 63, 93, 66, 97, 82, 18, 3, 96, 83, 20, 79,
  7, 93, 90, 29, 18, 53, 48, 61, 50, 10, 92, 87, 54, 39, 66, 91, 49, 46, 36, 6,
  12, 97, 74, 93, 57, 12, 52, 58, 25, 78, 98, 26, 69, 100, 81, 3, 76, 67,
];
data.sort((a, b) => a - b);
let sum = 0;
const occurrences = {};
for (let i = 0; i < data.length; i++) {
  const num = data[i];
  sum += num;
  if (occurrences[num]) {
    occurrences[num]++;
  } else {
    occurrences[num] = 1;
  }
}
const average = sum / data.length;
const median =
  data.length % 2 === 0
    ? (data[data.length / 2 - 1] + data[data.length / 2]) / 2
    : data[Math.floor(data.length / 2)];
const uniqueCount = Object.keys(occurrences).length;
console.log("average:", average);
console.log("median:", median);
console.log("number of unique values:", uniqueCount);
console.log("occurrences of each unique value:", occurrences);

