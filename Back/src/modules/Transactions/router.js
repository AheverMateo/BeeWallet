import express from "express";
import { 
    transferBetweenAccounts, 
    transferTypeUpdate,
    transferById,
    transferByUserId,
    allTransfers,
    deleteTransfer
  } from './controller';

const router = express.Router();

router.get("/:transactionId", transferById);
router.get("/User/:UserId/:page", transferByUserId);
router.get("/List/:page", allTransfers);
router.put("/Type",transferTypeUpdate );
router.post("/",transferBetweenAccounts );
router.delete("/:transactionId", deleteTransfer);

export default router;
