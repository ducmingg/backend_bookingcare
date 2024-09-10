const dotenv = require("dotenv");
const express = require("express");
const initWebRouter = require("./route/web.js");
const {swaggerDocs} = require("./swagger.js");

dotenv.config();
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
initWebRouter(app);
let port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}`);
  swaggerDocs(app, port);
});
