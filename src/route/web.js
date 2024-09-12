// src/routes/userRoutes.js
const express = require("express");
const { createNewUser,getAllUser,editUser,deleteUser } = require("../controllers/userController.js");

const router = express.Router();

const initWebRouter = (app) => {
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

  /**
   * @swagger
   * /register:
   *   post:
   *     summary: Register a new user
   *     tags: [Users]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *                 example: user@example.com
   *               password:
   *                 type: string
   *                 example: password123
   *               firstName:
   *                 type: string
   *                 example: John
   *               lastName:
   *                 type: string
   *                 example: Doe
   *               address:
   *                 type: string
   *                 example: 123 Main St
   *               gender:
   *                 type: string
   *                 example: 1
   *               roleId:
   *                 type: string
   *                 example: user
   *     responses:
   *       200:
   *         description: User registered successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   example: User registered successfully
   */
  router.post("/register", createNewUser);
  /**
   * @swagger
   * /getall:
   *   get:
   *     summary: Get all users
   *     responses:
   *       200:
   *         description: Success
   */
  router.get("/getall",getAllUser)

  router.patch("/edit/:id",editUser)

  router.delete("/delete/:id",deleteUser)
  return app.use("/", router);
};

module.exports = initWebRouter;
