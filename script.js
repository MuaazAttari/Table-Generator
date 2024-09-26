let number = +prompt("Enter number to Generate Multiplication table:");

if (number > 0) {
  for (let i = 0; i < 11; i++) {
    console.log(`${number} x ${i} = ${i * number}`);
  }
} else {
  for (let i = 0; i < 11; i++) {
    console.log(`3 x ${i} = ${i * 3}`);
  }
}
