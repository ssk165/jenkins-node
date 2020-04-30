let express = require("express");
let app = express();

app.get("/", function (req, res) {
  res.send("This is jenkins demo");
});

app.listen(4000);
