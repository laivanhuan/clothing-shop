const express = require("express");
const configs = require("config");

const { Response } = require("./utils");

const PORT = configs.get("server.port");
const server = express();

server.get("/api/healthz", (_, res) => {
  const response = new Response(200, "OK");
  return res.status(200).json(response);
});

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
