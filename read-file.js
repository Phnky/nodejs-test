var fs = require("fs");
var http = require("http");

http.createServer(function(req, res) {
  console.log("request received.");
  fs.readFile("test-file.txt", function(err, data){
    console.log("reading file.");
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data);
    return res.end();
  });
}).listen(8080);
