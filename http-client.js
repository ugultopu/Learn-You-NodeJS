/**
 * Learn You the Node.JS Challenge #6
 *
 * Make a HTTP GET request and print out the received data.
 */
require('http').get(process.argv[2], response => {
  response.setEncoding('utf8');
  // Second argument is the same thing as:
  //   chunk => { console.log(chunk); }
  response.on('data', console.log);
});
