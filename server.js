const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const MongoClient = require("mongodb").MongoClient;
const uri = "your_mongodb_uri_here";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const collection = client.db("test").collection("faceData");

  app.post("/saveData", (req, res) => {
    // Insert data logic here
  });

  // client.close();
});

// Serve static files from the "public" directory
app.use(express.static("public"));

// Basic Route to ensure everything is working
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

app.post("/upload", upload.single("image"), (req, res) => {
  // req.file contains information about the uploaded file
  console.log(req.file);

  // Do your facial recognition magic here

  res.send("File uploaded!");
});
