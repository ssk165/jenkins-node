let express = require("express");
let app = express();

app.get("/", function (req, res) {
  res.send("This is jenkins demo");
});

const port = process.env.PORT || 4000;

app.listen(port);
