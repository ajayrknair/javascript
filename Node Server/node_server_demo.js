var http=require("http");
var url=require("url");
var path=require("path");
var fs = require("fs");
http.createServer(function(request, response){
    var uri = url.parse(request.url).pathname;
    var fileName = path.join(process.cwd(), uri);
    fs.exists(fileName, function (exists) {
        if(!exists) {
            response.statusCode = 404;
            response.setHeader("Content-Type", "text/html");
            response.write("404 ");
            response.end();
            return;
        }

        fs.readFile(fileName, "binary", function(err, file) {
            if(err) {
                response.statusCode = 500;
                response.setHeader("Content-Type", "text/html");
                response.write(err + "\n");
                response.end();
                return;
            }

            response.statusCode = 200;
            response.write(file, "binary");
            response.end();
        });
    });
}).listen(8181);
console.log("Server running");