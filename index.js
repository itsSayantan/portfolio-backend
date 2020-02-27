const path = require("path");
const express = require("express");
const fallback = require("express-history-api-fallback");
const app = express();
const cors = require("cors");
const root = __dirname + "/public";

app.use(cors());

const port = process.env.PORT || 5000;

const services = require("./controllers");

app.get("/api/projects/getAll", services.getAllProjects);
app.get("/api/getTimeLineItems", services.getTimeLineItems);
app.get("/api/getGithubApiRateLimit", services.getGithubApiRateLimit);
app.get("/api/posts/get/:id", services.getPostByID);

app.use(express.static(root));
app.use(fallback("index.html", { root: root }));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
