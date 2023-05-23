const http = require("http");
const url = require("url");
const app = {};
app.config = {
  port: 3000,
};
app.createServer = () => {
  const server = http.createServer(app.handleRequest);
  server.listen(app.config.port, () => {
    console.log("server started...");
  });
};
app.handleRequest = (req, res) => {
  const parsedUrl=url.parse(req.url,true);
  const path=parsedUrl.pathname;
  res.end("hello response");
};
app.createServer();
