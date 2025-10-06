/* Let's pretend that there is no exponentiation built into JavaScript, and
   we have to write it ourselves using repeated multiplication. Complete the
   power function below!
*/

function power(base, exponent) {
  if (exponent < 1 || Math.floor(exponent) !== exponent) {
    console.error(
      "Let's not worry about supporting negative, 0, or fractional exponents for now!"
    );
  }

  // your code here!
  let output = base;
  for (let i = 1; i < exponent; i++) {
    output *= base;
  }
  return output;
}
console.log(power(2, 3)); 
console.log(power(3, 4)); 
console.log(power(5, 6)); 


function test(base, exponent) {
  if (power(base, exponent) !== base ** exponent) {
    console.log(`Test case failed: ${base} raised to power ${exponent}`);
  }
}

test(2, 3);
test(3, 4);
test(5, 6);
