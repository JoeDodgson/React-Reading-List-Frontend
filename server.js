// Require in npm modules
const express = require("express");
const path = require("path");
const cors = require("cors");

// Set up express server
const app = express();
const PORT = process.env.PORT || 3001;

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  // Set static build folder
  app.use(express.static("build"));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

// Start the API server
app.listen(PORT, function() {
  console.log(`API Server listening on PORT ${PORT}!`);
});
