const express = require("express");
const app = express();

const routes = require("./src/router/route.js");

app.use(routes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
