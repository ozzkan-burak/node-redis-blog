const express = require("express");

const app = express();

const PORT = 3030;
console.log(PORT);
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
