var http = require("http");
var dt = require("./datetime.js");
var url = require("url");
// require function includes a module(similar to js libraries)
// ./ is needed to find a module in the same folder as test.js
// The url module can split the query string into readable parts.
var fs = require("fs");
// fs allows the ability to work with the file system on the machine:
// read files
// write files
// update files
// delete files
// rename files

// the built in http module can be used to create an HTTP server that listens to server ports and gives a response back to the client. The createServer() method is used to create the server.
http.createServer(function(req, res) {
  // the req arguement represents the request from the client
   res.writeHead(200, {
     "Content-Type": "text/html"
  // the first argument '200' is the response code ..which means OK
  //the second argument is an object containing the response headers
   });
  res.write("It is currently " + dt.myDateTime());

  res.write(req.url);
  // the req object has a property called url that holds part of the url that comes after the domain name.
  // url.parse() will parse the request url into the following obect:
  // Url {
  // protocol: null,
  // slashes: null,
  // auth: null,
  // host: null,
  // port: null,
  // hostname: null,
  // hash: null,
  // search: '?fruit=banana&year=2018&month=april',
  // query: { fruit: 'banana', year: '2018', month: 'april' },
  // pathname: '/',
  // path: '/?fruit=banana&year=2018&month=april',
  // href: '/?fruit=banana&year=2018&month=april' }
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);

}).listen(8080);
