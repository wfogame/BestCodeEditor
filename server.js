const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");
const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  const PathExt = path.extname(pathname);
  const CheckCode = pathname.slice(0, 7);

  if (CheckCode == "/iframe") {
    const iframeNum = pathname
      .replace(PathExt, "")
      .replace("iframe", "")
      .replace("[", "")
      .replace("]", "")
      .replace("/", "");

    res.end(iframeNum);
    return;
  }


  fs.readFile(path.join(__dirname, pathname.slice(1)),(err,data)=>{
    let ContentType;
 


switch (PathExt) {
        case ".html":
            ContentType = "text/html";
            break;
        case ".css":
            ContentType = "text/css";
            break;
        case ".js":
            ContentType = "application/javascript";
            break;
        case ".json":
            ContentType = "application/json";
            break;
        case ".png":
            ContentType = "image/png";
            break;
        case ".jpg":
        case ".jpeg":
            ContentType = "image/jpeg";
            break;
        case ".svg":
            ContentType = "image/svg+xml";
            break;
        case ".gif":
            ContentType = "image/gif";
            break;
        case ".txt":
            ContentType = "text/plain";
            break;
        default:
            ContentType = "application/octet-stream";
    }




    res.statusCode = 200;
    res.setHeader("Content-Type",ContentType);
    res.end(data);


  })



 



});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
