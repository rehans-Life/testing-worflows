const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(process.env.PORT, () =>
  console.log(`Server listening on PORT ${process.env.PORT}`)
);
