import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";

import {
  UserController,
  DialogController,
  MessageController
} from "./controllers";
import { updateLastSeen } from "./middlewares";

const app = express();
const port = 3002;
const db = "chat";

app.use(bodyParser.json());
app.use(updateLastSeen);

const UserCtrl = new UserController();
const DialogCtrl = new DialogController();
const MessageCrtl = new MessageController();

mongoose.connect(`mongodb://localhost:27017/${db}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.get("/user/:id", UserCtrl.show);
app.delete("/user/:id", UserCtrl.delete);
app.post("/user/registration", UserCtrl.create);

app.get("/dialogs/:id", DialogCtrl.index);
app.delete("/dialogs/:id", DialogCtrl.delete);
app.post("/dialogs", DialogCtrl.create);

app.get("/messages/:id", MessageCrtl.index);
app.delete("/messages/:id", MessageCrtl.delete);
app.post("/messages", MessageCrtl.create);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
