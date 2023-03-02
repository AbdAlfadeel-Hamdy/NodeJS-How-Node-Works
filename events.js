const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {}

const myEmitter = new Sales();

myEmitter.on("newSale", () => console.log("There is a newSale!"));
myEmitter.on("newSale", () => console.log("Customer Name: Abd Al-fadeel"));
myEmitter.on("newSale", (stock) =>
  console.log(`There are ${stock} items left in the stock!`)
);

myEmitter.emit("newSale", 9);
////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another Request received");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening for requests...");
});
