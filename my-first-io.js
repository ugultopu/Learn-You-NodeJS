/**
 * Learn You the Node.JS Challenge #3
 *
 * Print the number of newlines in a file.
 */
console.log(
  require('fs').readFileSync(process.argv[2], 'utf8')
  .split('\n').length - 1
);
