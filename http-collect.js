/**
 * Learn You the Node.JS Challenge #7
 *
 * Collect all data from a request and print it at the end.
 */
require('http').get(process.argv[2], response => {
  let data = '';
  response.setEncoding('utf8');
  response.on('data', chunk => { data += chunk; });
  response.on("end", () => {
    console.log(data.length);
    console.log(data);
  });
});
