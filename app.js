alert('Starting the hidden number game.');
let hiddenNumber = 4;
console.log(hiddenNumber);

let attempts = 0;
let guess = parseInt(prompt('Choose a number between 1 and 10:'));
attempts++;

while (guess !== hiddenNumber) {
    if (hiddenNumber > guess) {
        alert(`The hidden number is greater than ${guess}`);
    } else {
        alert(`The hidden number is smaller than ${guess}`);
    }
    guess = parseInt(prompt('Choose a number between 1 and 10:'));
    attempts++;
}

alert(`Nice! You found the hidden number: ${hiddenNumber} in ${attempts} attempts.`);