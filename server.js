const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const MongoClient = require("mongodb").MongoClient;

// Connect to localhost at the default port 27017, and use a database named "faceGuardDB"
const uri = "mongodb://localhost:27017/faceGuardDB";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) {
    console.error("Failed to connect to MongoDB", err);
    return;
  }
  const collection = client.db("faceGuardDB").collection("faceData");

  app.post("/saveData", (req, res) => {
    // Insert data logic here
  });

  // Uncomment this if you'd like to close the MongoDB connection when the server stops
  // client.close();
});

// Serve static files from the "public" directory
app.use(express.static("public"));

// Basic Route to ensure everything is working
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// File upload endpoint
app.post("/upload", upload.single("image"), (req, res) => {
  // req.file contains information about the uploaded file
  console.log(req.file);

  // Do your facial recognition magic here

  res.send("File uploaded!");
});

// Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
