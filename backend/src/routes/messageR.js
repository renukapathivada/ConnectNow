import express from 'express';
import {protectRoute} from "../middleware/authM.js";
import {getMessages,getUsersForSidebar,sendMessage} from "../controllers/messageC.js";
const router = express.Router();
router.get("/users",protectRoute,getUsersForSidebar);
router.get("/:id",protectRoute,getMessages);


router.post("/send/:id",protectRoute,sendMessage);



export default router;