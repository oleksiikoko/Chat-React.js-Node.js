import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";

import { UserModel } from "./schemas";
import { UserController } from "./controllers";

const app = express();
const port = 3002;
const db = "chat";

app.use(bodyParser.json());

const User = new UserController();

mongoose.connect(`mongodb://localhost:27017/${db}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.get("/user/:id", User.show);
app.delete("/user/:id", User.delete);
app.post("/user/registration", User.create);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
