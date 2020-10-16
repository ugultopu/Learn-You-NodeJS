/**
 * Learn You the Node.JS Challenge #5
 *
 * List all files in a directory with an extension.
 */
const [dir, ext] = process.argv.slice(2);
require('fs').readdir(dir, (_, files) => {
  for (const file of files) {
    if (file.endsWith(`.${ext}`)) console.log(file);
  }
});
