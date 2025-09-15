// Get the first argument
const arg = process.argv[2];

// Convert it to integer
const num = parseInt(arg);

// Check if it's a valid number
if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log("My number: " + num);
}
