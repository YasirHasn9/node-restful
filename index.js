const express = require("express");

const server = express();
const port = 4000;

const useRouter = require("./users/users-router");
const useWelcome = require("./users/welcome-reouter");

server.use(express.json());
server.use("/users", useRouter);
server.use("/", useWelcome);

// create endpoint that returns all the posts for a user
// create endpoint for adding a new post for a user

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
