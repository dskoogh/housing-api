const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello world!"));
console.log("App running!");
// app.listen(port, () =>
//   console.log(`Example app listening at http://localhost:${port}`)
// );
