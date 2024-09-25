let number = +prompt("Enter number to Generate Multiplication table:");

if (number > 0) {
  for (let i = 0; i < 11; i++) {
    console.log(i * number);
  }
} else {
  for (let i = 0; i < 11; i++) {
    console.log(i * 3);
  }
}
