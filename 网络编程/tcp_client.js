const net = require("net");

const client = net.connect({ port: 3500 }, () => {
  console.log("connected");
  client.write("world!");
});
