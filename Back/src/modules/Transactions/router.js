import express from "express";
import { 
    transferBetweenAccounts, 
    transferTypeUpdate
  } from '../Transactions/controller';

const router = express.Router();

router.get("", );
router.put("/Type",transferTypeUpdate );
router.post("/",transferBetweenAccounts );
router.delete("", );

export default router;