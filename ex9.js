const data = [
  { day: "Monday", tempF: 60 },
  { day: "Tuesday", tempF: 65 },
  { day: "Wednesday", tempF: 70 },
  { day: "Thursday", tempF: 68 },
  { day: "Friday", tempF: 72 },
  { day: "Saturday", tempF: 78 },
  { day: "Sunday", tempF: 80 },
];

function convertFtoC(tempF) {
  return (tempF - 32) * (5 / 9);
}

/* Write code to print out the temperature in Celsius for each day:
   `${dayName} it will be ${tempC} degrees Celsius`
*/
