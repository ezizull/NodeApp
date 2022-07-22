import cookieParser from "cookie-parser";
import createError from "http-errors";
import bodyParser from "body-parser";
import {fileURLToPath} from "url";
import express from "express";
import logger from "morgan";
import path from "path";
import cors from "cors";
const app = express();
const port = 3000;

import mongoose from "mongoose";
import route from "./routes/index.js";
import products from "./routes/products.js";
import books from "./routes/books.js";

mongoose.connect("mongodb://127.0.0.1:27017/db_buku", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const database = mongoose.connection;
database.on("error", (error) => console.error(error));
database.once("open", () => console.log("Database Connected"));

app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use(express.static("views"));
app.use("/", route);
app.use("/product", products);
app.use("/book", books);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
  console.log(`Listening On Port ${port}`);
});
