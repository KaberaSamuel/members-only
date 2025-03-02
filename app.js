import path from "node:path";
import express from "express";
import homeRouter from "./routes/homeRoute.js";

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join("./", "views"));

app.use("/public", express.static("./" + "public"));
app.use(express.urlencoded({ extended: false }));
app.use("/", homeRouter);

app.listen(3000, () => {
  console.log("Server Open");
});
