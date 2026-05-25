console.log("assignment 1");
for (i = 1; i <= 3; i++) {
  console.log("*****");
}

console.log("assignment 2");
let char = "";
for (let col = 1; col <= 5; col++) {
  char += "*";
  console.log(char);
}

console.log("assignment 3");
let num = "";
for (let col = 5; col >= 1; col--) {
  num += "*";
  console.log(num);
}

console.log("assignment 4");
for (let row = 1; row <= 3; row++) {
  let chara = "";
  if (row % 2 === 0) {
    chara += " ";
  }
  for (let col = 1; col <= 5; col++) {
    chara += "* ";
  }
  console.log(chara);
}

console.log("assignmet 5");
let day = 3;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}
