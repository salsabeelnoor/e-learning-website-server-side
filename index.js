const express = require("express");
const app = express();
const port = 5000;
//process.env.PORT ||

app.get("/", (req, res) => {
  res.send("E-Learning API running");
});

app.listen(port, () => {
  console.log("E- learning website learning on port", port);
});
