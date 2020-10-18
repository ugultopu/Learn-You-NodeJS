/**
 * Learn You the Node.JS Challenge #9
 *
 * Create a TCP socket and return the current date in a specific format.
 */
require('net').createServer(conn => {
  const date = new Date();
  conn.end(
    `${date.getFullYear()}`.padStart(4, '0') +
    '-' +
    `${date.getMonth() + 1}`.padStart(2, '0') +
    '-' +
    `${date.getDate()}`.padStart(2, '0') +
    ' ' +
    `${date.getHours()}`.padStart(2, '0') +
    ':' +
    `${date.getMinutes()}`.padStart(2, '0') +
    '\n'
  );
}).listen(process.argv[2]);
