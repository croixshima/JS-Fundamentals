// Check arguments passed from the command line
const args = process.argv.slice(2); // remove 'node' and filename

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
