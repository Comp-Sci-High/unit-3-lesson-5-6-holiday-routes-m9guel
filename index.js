const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
//sends them to the index.html when "/" is in the browser
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
//sends them to the candy.html when "/candy" is in browser
app.get("/candy", (req, res) => {
  res.sendFile(__dirname + "/public/candy.html");
});
//sends them to the costumes.html when "/costumes" is in browser
app.get("/costumes", (req, res) => {
  res.sendFile(__dirname + "/public/costumes.html");
});

app.listen(3000, () => {
  console.log(`Holiday Server is Running!`);
});
