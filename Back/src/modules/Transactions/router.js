import express from "express";
import {
  transferBetweenAccounts,
  transferTypeUpdate,
  transferById,
  transferByUserId,
  allTransfers,
  deleteTransfer,
} from "./controller.js";

const router = express.Router();

router.get("/:transactionId", transferById);
router.get("/user/:userId/:page", transferByUserId);
router.get("/list/:page", allTransfers);
router.put("/type", transferTypeUpdate);
router.post("/", transferBetweenAccounts);
router.delete("/", deleteTransfer);

export default router;
