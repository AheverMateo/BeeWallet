import express from "express";
import {
    newCredit,
    updateCredit,
    getCredit,
    getAllUserCredits,
    getUserDebt,
    deleteCredit
} from './controller.js';

const router = express.Router();

router.post("/", newCredit);
router.put("/update", updateCredit);
router.get("/:id", getCredit);
router.get("/debt/:id", getUserDebt);
router.get("/user/:id", getAllUserCredits);
router.delete("/:id", deleteCredit);

export default router;