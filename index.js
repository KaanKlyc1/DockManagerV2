import express from "express";
import bodyParser from "body-parser";
import docksRoutes from "./routers/docks.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import expressEjsLayouts from "express-ejs-layouts";
expressEjsLayouts;

const app = express();
const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.use(expressEjsLayouts);

app.use("/static", express.static(path.join(__dirname, "static")));

app.use("/", docksRoutes);

app.get("/", (req, res) => {
  console.log("Server running");
  res.send("Server opened");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
