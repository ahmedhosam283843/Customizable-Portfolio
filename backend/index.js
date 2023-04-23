import express from "express";
import bodyParser from "body-parser";
import {skillRouter, loginRouter, projectRouter, portfolioRouter, userRouter, experienceRouter} from "./routers/index.js";
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/user", userRouter);
app.use("/portfolio", portfolioRouter);
app.use("/projects", projectRouter);
app.use("/skills", skillRouter);
app.use("/experiences", experienceRouter);
app.use("/login", loginRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

app.listen(PORT, () => {
  console.log(`Server running on port:  http://localhost:${PORT}`);
});
