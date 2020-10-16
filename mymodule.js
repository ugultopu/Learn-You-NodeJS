/**
 * Learn You the Node.JS Challenge #6
 *
 * Define a function that lists file names in a directory, filtered by a
 * given extension.
 */
module.exports = (dir, ext, callback) => {
  require('fs').readdir(dir, (err, files) => {
    // Using a redundant if-else instead of simply writing
    // `callback(err, files.filter...)` to please the learnyounode
    // program.
    if (err) callback(err);
    else callback(null, files.filter(f => f.endsWith(`.${ext}`)));
  });
};
