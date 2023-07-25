const now = 2037;
const ageStoyan = now - 1991;
const ageSarah = now - 2018;
console.log(ageStoyan, ageSarah);

console.log(ageStoyan * 2, ageStoyan / 10, 2 ** 3);

const firstName = "Stoyan";
const lastName = "Petrov";
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5;
x += 10;
x += 4;
x++;
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageStoyan > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

