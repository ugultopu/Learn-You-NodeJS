/**
 * Learn You the Node.JS Challenge #10
 *
 * Create an HTTP server that reads a file given by a command line
 * argument and sends the file contents as the response.
 */
const { createReadStream } = require('fs');

require('http').createServer((_, res) => {
  const stream = createReadStream(process.argv[3]);
  stream.on('open', () => { stream.pipe(res) });
}).listen(process.argv[2]);
