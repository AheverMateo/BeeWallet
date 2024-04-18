import express from "express";
import { getUsers, getUser, deleteUser, updateUser, blockUser, unblockUser } from "./controller.js";
import { isAdmin } from "../../middlewares/auth.js";

const router = express.Router();

router.get("/", isAdmin, getUsers);
router.get("/:id", isAdmin, getUser);
router.delete("/:id", isAdmin, deleteUser);
router.put("/:id", isAdmin, updateUser);
router.put("/block/:id", isAdmin, blockUser);
router.put("/unblock/:id", isAdmin, unblockUser);

export default router;
