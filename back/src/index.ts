const mongoose = require("mongose");
const express = require("express");
const app = express();
const port = 3002;
const db = "chat";

mongoose.connect(`mongodb://localhost:27017/${db}`, { useNewUrlParser: true });

app.get("/", (_: any, res: any) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
