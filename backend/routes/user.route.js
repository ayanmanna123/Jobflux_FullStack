import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controllers.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/updateProfile").post(isAuthenticated, updateProfile);

export default router;
