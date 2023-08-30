//Imports
const express = require("express");
const path = require("path");
const app = express();
const engine = require("express-edge");

// Configure view caching
app.enable("view cache");
// --- or ---
//app.diable("view cache");

//Settings
const port = 5000;

const courses = [
  {
    title: "Desarrollo web con JavaScript",
    description: "Full Stack desde cero",
  },
  {
    title: "HTML y CSS Desde cero",
    description: "Crea webs modernas",
  },
  {
    title: "VueJS Desde cero",
    description: "Framework moderno de JS",
  },
];
app.set("views", path.join(__dirname, "views"));

//Middlewares
app.use(engine);
app.use(express.static("public"));
app.use((req, res, next) => {
  console.log(`
  new Request:
  TO: ${req.path}
  METHOD:${req.method}
  `);
  next();
});

//Routes

app.get("/", (req, res) => {
  res.render("app");
});
app.listen(port, () => {
  console.log(`App running on port ${port}🙌`);
});
