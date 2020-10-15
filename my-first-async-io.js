/**
 * Learn You the Node.JS Challenge #4
 *
 * Read a file asynchronously and print the number of newlines in it.
 */
require('fs').readFile(process.argv[2], 'utf8', (_, content) => {
  console.log(content.split('\n').length - 1);
});
