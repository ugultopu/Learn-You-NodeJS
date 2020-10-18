/**
 * Learn You the Node.JS Challenge #12
 *
 * Create an HTTP server that serves JSON data on two endpoints.
 */
require('http').createServer((req, res) => {
  if (!req.method === 'GET') return;
  const url = new URL(req.url, `http://${req.headers.host}`),
        date = new Date(url.searchParams.get('iso'));
  res.setHeader('Content-Type', 'application/json');
  switch (url.pathname) {
  case '/api/parsetime':
    res.end(JSON.stringify({
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    }));
    break;
  case '/api/unixtime':
    res.end(JSON.stringify({ unixtime: date.getTime() }));
    break;
  default:
    res.end(JSON.stringify({
      error: `Unknown endpoint: ${url.pathname}`
    }));
    break;
  }
}).listen(process.argv[2]);
