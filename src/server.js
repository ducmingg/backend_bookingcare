import dotenv from "dotenv";
import express from "express";
import initWebRouter from "./route/web.js";
import swaggerDocs from "./swagger.js";

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
