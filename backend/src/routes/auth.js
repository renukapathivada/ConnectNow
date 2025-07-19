import express from "express";

import {checkAuth, login, signup, logout, updateProfile} from "../controllers/authC.js";
import {protectRoute} from "../middleware/authM.js";

const router=express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.put("/update-profile", protectRoute, updateProfile);
router.get("/check",protectRoute,checkAuth);
export default router;