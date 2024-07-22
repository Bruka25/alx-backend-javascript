// Display the initial message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Read input from the command line
process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name !== null) {
    // Display the user's name
    process.stdout.write(`Your name is: ${name}`);
  }
});

// Display the closing message when the input stream ends
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
