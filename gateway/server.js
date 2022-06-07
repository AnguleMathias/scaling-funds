const express = require("express");

// create express app
const app = express();

// set port to listen for requests
const port = process.env.PORT || 9001;

// define a root page
app.get("/", (req, res) => {
  res.send("Hello world");
});

// create a http server
// const server = http.createServer(app);

// create investor routes
app.use("/investors", require("./src/routes/investor.route"));

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
