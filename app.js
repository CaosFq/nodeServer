const express = require("express");
const path = require("path");
const app = express();

const port = 5000;
app.use(express.static("public"));
app.use((req, res, next) => {
  console.log(`
  new Request:
  TO: ${req.path}
  METHOD:${req.method}
  `);
  next();
});

app.get(
  "/",

  (req, res) => {
    res.sendFile(path.join(__dirname, "views/app.html"));
  }
);
app.listen(port, () => {
  console.log(`App running on port ${port}🙌`);
});
