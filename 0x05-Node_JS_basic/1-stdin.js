// Import the readline module to read input from the command line
const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the initial message
console.log('Welcome to Holberton School, what is your name?');

// Listen for the user input
rl.on('line', (input) => {
  // Display the user's name
  console.log(`Your name is: ${input}`);
  // Close the readline interface
  rl.close();
});

// When the readline interface is closed, display the closing message
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
