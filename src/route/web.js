import express from "express";

let router = express.Router();

let initWebRouter = (app) => {
  /**
   * @swagger
   * /hi:
   *   get:
   *     summary: Get all users
   *     responses:
   *       200:
   *         description: Success
   */
  router.get("/hi", (req, res) => {
    return res.status(200).json({ message: "Hello Rial" });
  });
  return app.use("/", router);
};

export default initWebRouter;
