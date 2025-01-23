var http = require("http");
var fs = require("fs");
var path = require("path");

var server = http.createServer((req, res) => {
    let filePath = path.join(__dirname,"static",req.url ==="/"?"index.html":req.url)
    fs.readFile(filePath,(error,content)=>{
        if(error){
            res.end("Error Page")
        }
        else{
            res.end(content)
        }
    })
});

server.listen(5000, () => {
  console.log("Hello");
});
