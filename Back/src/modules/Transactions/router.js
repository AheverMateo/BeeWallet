import express from "express";
import {
  transferBetweenAccounts,
  transferTypeUpdate,
  transferById,
  transferByUserId,
  allTransfers,
  deleteTransfer,
  expenseHistory,
  incomeHistory,
} from "./controller.js";

const router = express.Router();

router.get("/:transactionId", transferById);
router.get("/user/:page", transferByUserId);
router.get("/list/:page", allTransfers);
router.get("/expense", expenseHistory);
router.get("/income", incomeHistory);
router.put("/type", transferTypeUpdate);
router.post("/", transferBetweenAccounts);
router.delete("/", deleteTransfer);

export default router;
