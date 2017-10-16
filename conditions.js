var howManyHotDogsIAte = 500;

if (howManyHotDogsIAte > 50) {
  console.log('plenty of dogs');
}
else if (howManyHotDogsIAte > 100) {
  console.log('damn thats a lot of dogs');
}
else if (howManyHotDogsIAte < 3) {
  console.log('couple of dogs');
}
else {
  console.log('thats a reasonable amount of dogs');
}


console.log( 'astronaut' < 'pumpkin' );
console.log( 'apple' < 'astronaut' );
console.log( 'quantum' < 'pumpkin' );



var userName = prompt('What is your name?');
var birthYear = prompt('What year were you born?');

// turn "prompt()" string into a number
birthYear = Number(birthYear);


if (userName === 'Nizar') {
    console.log('Hello, Master!');
}
else if (userName === 'Dan' && birthYear === 1992) {
    console.log('Hello, Mr. Soraluz.');
}
else {
    console.log('Hello, ' + userName + '!');
}


var userAge = 2017 - birthYear;
console.log('You are ' + userAge + ' years old.');


if (userAge >= 21) {
    console.log('You can drink in the U.S.');
}
else if (userAge >= 18) {
    console.log('You can drink in Puerto Rico.');
}
else {
    console.log('You are too young to drink.');
}


// Exercise Solution----------------------------------------
// ---------------------------------------------------------
var myLanguage = prompt('What is your primary language?');

// turn language to lowercase for our comparison
myLanguage = myLanguage.toLowerCase();

if (myLanguage === 'spanish') {
    console.log('¡Hola, Mundo!');
}
else if (myLanguage === 'french') {
    console.log('Bonjour le monde!');
}
else {
    console.log('Hello, world!');
}




// SWITCH ----------------------------
// -----------------------------------

// Long IF statement
var name  = prompt("Favorite Game of Thrones main character:");
var house = "";

if (name === "Khal Drogo") {
    house = "Dothraki";
}
else if (name === "Daenerys") {
    house = "Targaryen";
}
else if (name === "Jon Snow" || name === "Sansa" || name === "Arya") {
    house = "Stark";
}
else if (name === "Cersei" || name === "Tyrion" || name === "Ser Jaime") {
    house = "Lannister";
}
else {
    house = "Other";
}


// Re-written as a SWITCH
var name  = prompt("Favorite Game of Thrones main character:");
var house = "";

switch (name) {
    case "Khal Drogo":
        house = "Dothraki";
        break;

    case "Daenerys":
        house = "Targaryen";
        break;

    case "Jon Snow":
    case "Sansa":
    case "Arya":
        house = "Stark";
        break;

    case "Cersei":
    case "Tyrion":
    case "Ser Jaime":
        house = "Lannister"
        break;

    default:
        house = "Other";
        break;
}

