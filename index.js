const express = require("express");
const app = express();

const port = process.env.SERVER_PORT || 5000;

const services = require("./controllers");

app.get("/api/projects/getAll", services.getAllProjects);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
