const http = require("http");
const fs = require("fs");
const sha512 = require("js-sha512");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.url === "/digest") {
      const data = fs.readFileSync("./input.txt");
      const digest = sha512(data);
      res.write(`digest: ${digest} `);
    } else {
      res.write(`test-server: ${Date.now()} `);
    }
    res.end();
  })
  .listen(8000, () => console.log("server running on port:8000"));
