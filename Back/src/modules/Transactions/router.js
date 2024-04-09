import express from "express";
import { 
    transferBetweenAccounts, 
    transferTypeUpdate,
    transferById,
    transferByUserId,
    allTransfers,
    deleteTransfer
  } from '../Transactions/controller';

const router = express.Router();

router.get("/:transactionId", transferById);
router.get("/User/:UserId/:page", transferByUserId);
router.get("/", allTransfers);
router.put("/Type",transferTypeUpdate );
router.post("/",transferBetweenAccounts );
router.delete("/", deleteTransfer);

export default router;