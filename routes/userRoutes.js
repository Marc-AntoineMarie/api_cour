const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const verifyToken = require("../middlewares/verifyToken");

// Routes Publiques
router.post("/login", userController.loginUser);
router.post("/", userController.createUser);

// Routes Privées
router.get("/", verifyToken, userController.getAllUsers);
router.get("/:id", verifyToken, userController.getUserById);
router.patch("/:id", verifyToken, userController.updateUser);
router.delete("/:id", verifyToken, userController.deleteUser);

module.exports = router;
