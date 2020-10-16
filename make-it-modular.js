/**
 * Learn You the Node.JS Challenge #6
 *
 * Accept directory and extension and print list of files with the given
 * extension.
 */
const fileFilter = require('./mymodule');

const [dir, ext] = process.argv.slice(2);
fileFilter(dir, ext, (err, files) => {
  if (err) console.log('An error occurred:', err);
  else for (const file of files) console.log(file);
});
