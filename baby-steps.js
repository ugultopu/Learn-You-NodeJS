/**
 * Learn You the Node.JS Challenge #2
 *
 * Prints the sum of integers received as command line arguments.
 * Ignores the arguments that are not integers.
 */
console.log(process.argv.reduce((sum, arg) => {
  const val = parseInt(arg);
  return val ? sum + val : sum;
}, 0));
