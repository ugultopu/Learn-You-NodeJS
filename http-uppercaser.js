/**
 * Learn You the Node.JS Challenge #11
 *
 * Create an HTTP server that responds POST requests by converting the
 * request body to uppercase and sending it back to the client.
 */
require('http').createServer((req, res) => {
  if (!req.method === 'POST') return;
  let data = '';
  req.setEncoding('utf8');
  req.on('data', chunk => { data += chunk.toUpperCase(); });
  req.on('end', () => { res.write(data); });
}).listen(process.argv[2]);
