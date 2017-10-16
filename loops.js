//  for (START; CONDITION; CHANGE) {
for (var x = 0;  x < 10;  x += 1) {
    console.log('iteration number ' + x);
}

console.log('x is ' + x)
console.log('DONE');


// --------------------------------------------


var x = 0;

while (x < 10) {
    console.log('iteration number ' + x);

    x += 1;
}

console.log('x is ' + x)
console.log('DONE');


// -------------------------------------------------

// Good "while" loop example.
// "while" loops are good when you don't know
// how many times you are going to repeat.

var userName = prompt('Whats your name?');
var attempts = 0;

while (userName === "") {
    attempts += 1;
    userName = prompt('No, seriously. Whats your name?');

    if (attempts > 10) {
        alert('Dont be an asshole. Attempt ' + attempts);
    }
}

console.log('Hello, ' + userName + '!');
