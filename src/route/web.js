import express from "express";

let router = express.Router();

let initWebRouter = (app) => {
  router.get("/hi", (req, res) => {
    return res.status(200).json({ message: "Hello world" });
  });
  return app.use("/", router);
};

export default initWebRouter;
