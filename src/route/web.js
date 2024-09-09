// src/routes/userRoutes.js
import express from "express";
import {createNewUser} from "../controllers/userController.js";

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
 *       400:
 *         description: Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Invalid input data
 */
  router.post("/register", createNewUser);
  return app.use("/", router);
};

export default initWebRouter;
