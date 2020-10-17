/**
 * Learn You the Node.JS Challenge #8
 *
 * Makes multiple HTTP GET requests and prints the responses in the
 * order that the requests are made. That is, regardless of however long
 * the requests take to complete, the responses are printed in the order
 * that requests are made.
 */
const { get } = require('http');

const urls = process.argv.slice(2),
      numUrls = urls.length,
      results = Array(numUrls).fill(null);
for (let i = 0; i < numUrls; i++) {
  get(urls[i], response => {
    let data = '';
    response.setEncoding('utf8');
    response.on('data', chunk => { data += chunk; });
    response.on('end', () => {
      results[i] = data;
      if (!results.includes(null)) {
        for (const result of results) console.log(result);
      }
    });
  });
}
/**
 * The following does not work. My initial idea was to keep only the
 * line:
 *
 *     results[i] = data;
 *
 * in response.on('end') callback and simply uncomment the lines below
 * in order to wait until all network requests are complete. However,
 * this simply does not work. If I do this, the program simply
 * continuously executes (that is, it goes into an infinite loop). The
 * reason is, while I thought that until a 'data' or 'end' event happens
 * the code will simply wait there and whenever one of these events
 * happen, the code will execute the event code and then continue
 * execution, apparently it does not work this way. Upon reaching
 *
 *     while (results.includes(null)) {}
 *
 * the code gets into an infinite loop (as we have expected). However,
 * what I didn't realize is that this infinite loop is like an infinite
 * task. That is, the code thinks that it is performing some task and
 * until the task is complete, the code DOES NOT respond to events. That
 * is, while executing the infinite loop below, the code DOES NOT
 * execute any events handlers (such as the handlers for the 'data' or
 * 'end' events above). Hence, in order to get the code working, we had
 * to move the logic that checks if all responses have been received
 * into the event handler of the 'end' event, instead of keeping them
 * below, outside of any event handlers.
 */
// while (results.includes(null)) {}
// for (const result of results) console.log(result);
