const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello from Kubernetes. This is sunil pal. this is the third commit. This is just to confirm that this is deployed on aws instances");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});